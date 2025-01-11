// Alert on clicking service cards
function showAlert(service) {
    alert(`${service} - Learn more about this service by joining GymX!`);
}

// Form submission
function submitForm(event) {
    event.preventDefault(); // Prevent page refresh
    alert('Thank you for contacting us! We will get back to you shortly.');
}
