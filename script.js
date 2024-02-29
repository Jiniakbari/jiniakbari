// JavaScript for the Contact Us page

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();

    // Get form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Perform form validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Send form data to server (you can replace this with your own implementation)
    // Example using fetch API
    fetch('/submit_contact_form', {
        method: 'POST',
        body: JSON.stringify({name: name, email: email, message: message}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success, show success message
            alert('Form submitted successfully!');
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            // Error, show error message
            alert('Failed to submit form. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('Failed to submit form. Please try again later.');
    });
}
