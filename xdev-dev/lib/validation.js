const Joi = require('joi');
const { AppError } = require('./errorHandler');

// Validation schemas
const schemas = {
    // Video validation schema
    video: Joi.object({
        title: Joi.string().min(3).max(100).required(),
        description: Joi.string().max(5000).allow(''),
        visibility: Joi.string().valid('public', 'private', 'unlisted').required(),
        tags: Joi.array().items(Joi.string()).max(20)
    }),

    // Channel validation schema
    channel: Joi.object({
        name: Joi.string().min(3).max(30).required(),
        handle: Joi.string().min(3).max(30).pattern(/^[a-zA-Z0-9_-]+$/).required(),
        description: Joi.string().max(1000).allow('')
    }),

    // Comment validation schema
    comment: Joi.object({
        text: Joi.string().min(1).max(1000).required(),
        videoId: Joi.string().required()
    }),

    // Message validation schema
    message: Joi.object({
        content: Joi.string().min(1).max(1000).required(),
        recipientId: Joi.string().required()
    })
};

// Validation middleware
const validate = (schemaName) => {
    return (req, res, next) => {
        const schema = schemas[schemaName];
        if (!schema) {
            return next(new AppError(`Validation schema '${schemaName}' not found`, 500));
        }

        const { error, value } = schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });

        if (error) {
            const errorMessage = error.details
                .map(detail => detail.message)
                .join(', ');
            return next(new AppError(errorMessage, 400));
        }

        // Replace request body with validated value
        req.body = value;
        next();
    };
};

module.exports = {
    validate
};
