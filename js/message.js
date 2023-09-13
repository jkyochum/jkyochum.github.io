const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const messageSentCard = document.querySelector('#messageSent');
const sendAnotherBtn = document.querySelector('#btnSendAnother');
let goodFirstName = false;
let goodLastName = false;
let goodEmail = false;
let goodMessage = false;
let messageSent = false;


//Main Function
function sendMessage() {

    if (isValid(firstName.value)) {
        goodFirstName = true;
        firstName.classList.remove('invalid');
    } else {
        firstName.classList.add('invalid');
        firstName.textContent = 'First name *';
    }

    if (isValid(lastName.value)) {
        goodLastName = true;
        lastName.classList.remove('invalid');
    } else {
        lastName.classList.add('invalid');
        lastName.textContent = 'Last name *';
    }

    if (isValid(email.value)) {
        if (isEmail(email.value)) {
            goodEmail = true;
            email.classList.remove('invalid');
        } else {
            email.classList.add('invalid');
            console.log('invalid email');
        }

    } else {
        email.classList.add('invalid');
        email.textContent = 'Email address *';
    }

    if (isValid(message.value)) {
        goodMessage = true;
        message.classList.remove('invalid');
    } else {
        message.classList.add('invalid');
        message.textContent = 'Your message *';
    }

    if (goodFirstName && goodLastName && goodEmail && goodMessage) {
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