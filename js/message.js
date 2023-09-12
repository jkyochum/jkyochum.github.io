//creating an object of form elements

const fields = {};





//main function
function sendMessage() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}



//helper functions

function isValid(value) {
    if (value === '' || value === null || value === 'undefined') {
        return false;
    } else {
        return true;
    }
}

function isEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(String(email).toLowerCase());
}





//Get all form elements when page loads

document.addEventListener('DOMContentLoaded', () => {
    fields.firstName = document.querySelector('#firstName');
    fields.lastName = document.querySelector('#lastName');
    fields.email = document.querySelector('#email');
    fields.message = document.querySelector('#message');
});