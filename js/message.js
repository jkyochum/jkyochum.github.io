const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const error = document.querySelector('#error');
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
        firstName.placeholder = 'First name *';
        goodFirstName = false;
    }

    if (isValid(lastName.value)) {
        goodLastName = true;
        lastName.classList.remove('invalid');
    } else {
        lastName.classList.add('invalid');
        lastName.placeholder = 'Last name *';
        goodLastName = false;
    }

    if (isValid(email.value)) {
        if (isEmail(email.value)) {
            goodEmail = true;
            email.classList.remove('invalid');
        } else {
            email.classList.add('invalid');
            console.log('Error: Invalid Email Address');
            error.innerHTML = '*Try another email address';
            goodEmail = false;
        }

    } else {
        email.classList.add('invalid');
        email.placeholder = 'Email address *';
        goodEmail = false;
    }

    if (isValid(message.value)) {
        goodMessage = true;
        message.classList.remove('invalid');
    } else {
        message.classList.add('invalid');
        message.placeholder = 'Your message *';
        goodMessage = false;
    }

    if (goodFirstName && goodLastName && goodEmail && goodMessage) {
        Email.send({
            SecureToken: "d20ca1c7-f111-4f49-8f2f-42cd50322f31",
            To: 'whiterwidow@gmail.com',
            From: "whiterwidow@gmail.com",
            Subject: "New Message!",
            Body: `${createBody(firstName.value, lastName.value, email.value, message.value)}`
        }).then(
            message => alert(message)
        );

        clearInputs();

        console.log('Congratulations: Your Message Has Been Sent');
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
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return regex.test(String(email).toLowerCase());
}

function createBody(first, last, email, msg) {
    const body = `<br>
        Message from: ${first} ${last}<br><br>
        ${first}'s email address: ${email}<br><br>
        Message:<br>
        ${msg}
    `;
    return body;
}

function clearInputs() {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    message.value = '';
}
