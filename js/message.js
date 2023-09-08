//creating an object of form elements

const fields = {};


//API call to email validator

// const options = { method: 'GET' };

// fetch(`https://emailvalidation.abstractapi.com/v1?api_key=2ecd09ec15af4720a0d8c6945df1dc97&email=${fields.email}`, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));






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