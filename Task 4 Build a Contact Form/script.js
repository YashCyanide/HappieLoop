function submitForm(event) {
    event.preventDefault();

    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Display confirmation message
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;

    // You can send the form data to a server here using AJAX or fetch API.
    // For simplicity, we are just displaying a confirmation message.
}
