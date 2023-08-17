function validateEmail() {
    // Get the email input field and validation message element
    var emailInput = document.getElementById("emailInput");
    var validationMessage = document.getElementById("validationMessage");

    // Regular expression to validate email format
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the format
    if (emailInput.value.match(emailFormat)) {
        // If the email is valid, display a success message
        validationMessage.innerText = "Thank you for registering with us, you will be notified with the latest updates!";
        validationMessage.classList.remove("error");
        validationMessage.classList.add("success");
    } else {
        // If the email is not valid, display an error message
        validationMessage.innerText = "Wrong format. Please enter a valid email address.";
        validationMessage.classList.remove("success");
        validationMessage.classList.add("error");
    }

    // Show the validation message
    validationMessage.style.display = "block";
}
