// Simple interactivity: show alert on page load
window.addEventListener('load', () => {
    console.log("Welcome to Ementora!");
});

// Dropdown services logging
document.querySelector('select[name="SERVICES"]').addEventListener('change', function() {
    console.log("Selected service:", this.value);
});
