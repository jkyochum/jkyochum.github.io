const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const messageSentCard = document.querySelector('#messageSent');
const sendAnotherBtn = document.querySelector('#btnSendAnother');
let messageSent = false;


//Main Function
function sendMessage() {
    Email.send({
        SecureToken: "d20ca1c7-f111-4f49-8f2f-42cd50322f31",
        To: 'whiterwidow@gmail.com',
        From: "whiterwidow@gmail.com",
        Subject: "New Message!",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );

    // console.log('message sent');
    messageSent = true;
    messageSentCard.classList.remove('closed');
    messageSentCard.parentElement.firstElementChild.classList.add('closed');
}


//Event Handlers
sendAnotherBtn.addEventListener('click', function () {
    messageSentCard.classList.add('closed');
    messageSentCard.parentElement.firstElementChild.classList.remove('closed');
});

//Helper Functions

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

// document.addEventListener('DOMContentLoaded', () => {
//     fields.firstName = document.querySelector('#firstName');
//     fields.lastName = document.querySelector('#lastName');
//     fields.email = document.querySelector('#email');
//     fields.message = document.querySelector('#message');
// });