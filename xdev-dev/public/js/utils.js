// Add Toastify CSS to head
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css';
document.head.appendChild(link);

// Add Toastify JS to head
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/toastify-js';
document.head.appendChild(script);

const Toast = {
    success(message) {
        Toastify({
            text: message,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "#4CAF50",
            }
        }).showToast();
    },

    error(message) {
        Toastify({
            text: message,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "#f44336",
            }
        }).showToast();
    },

    info(message) {
        Toastify({
            text: message,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "#2196F3",
            }
        }).showToast();
    }
};

// Add loading spinner CSS
const style = document.createElement('style');
style.textContent = `
.loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid #3498db;
    animation: spin 1s linear infinite;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    z-index: 9998;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);

// Add loading spinner HTML
const loadingHtml = `
<div class="loading-overlay">
    <div class="loading-spinner"></div>
</div>
`;
document.body.insertAdjacentHTML('beforeend', loadingHtml);

const Loading = {
    show() {
        document.querySelector('.loading-overlay').style.display = 'block';
    },
    hide() {
        document.querySelector('.loading-overlay').style.display = 'none';
    }
};

// Export the utilities
window.Toast = Toast;
window.Loading = Loading;
