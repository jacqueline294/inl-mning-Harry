
// Get the button element
const contactButton = document.getElementById('button-contact');
// Add an event listener to the contact button
contactButton.addEventListener('click', () => {
    // Get the  input element for email
    const emailInput = document.getElementById('email');
    // Read the text from the email input and log it to the console
    const emailText = emailInput.value;
    console.log(emailText);
});



// Function to create a paragraph and return it
function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}


// Get the input element for phone input
const phoneInput = document.querySelector('input[type="tel"]');
// Add an eventlistener to the phone input
phoneInput.addEventListener('input', function () {
    // Get the value of the phone input and create a paragraph
    const phoneText = phoneInput.value;
    const phoneParagraph = createParagraph('Phone: ' + phoneText);

    // Log the created paragraph to the console
    console.log(phoneParagraph);
});
