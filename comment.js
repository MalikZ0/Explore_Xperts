// creating java script to handle validation of user input in form
// getting the needed documents related to form
const form = document.querySelector('.contact_us_form');
const username = document.querySelector('#username');
const email = document.querySelector('#email_address');
const rating = document.querySelector('.rating');
const reason = document.querySelector('#reason');
const rated_container = document.querySelector('.rating_container');

// creating event to occur on click of submit button
form.addEventListener('submit',(event)=>{
    // calling validateForm() function later defined to validate user inputs
    validateForm();
    // calling submitForm() function later defined to check if all input are valid
    if(submitForm() == true){
        // if all inputs are valid form is submited
        form.submit();
        // on submition calling fuction to toggle visible and invisible classes of contact_us_form and thank_you screen
        back_to_form();
    }else{
        // if not all input are valid the submission is prevented
        event.preventDefault();
    }
});

// creating function to toggle visible and invisible classes of contact_us_form and thank_you screen
function back_to_form(){
    // getting the contact_us_form_container and the making changing its visible and invisible classes
    var element = document.getElementById('contact_us_form_container');
    element.classList.toggle('visible');
    element.classList.toggle('invisible');
    // getting the thank_you and the making changing its visible and invisible classes
    var element = document.getElementById('thank_you');
    element.classList.toggle('visible');
    element.classList.toggle('invisible');
}

// creating fuction that checks for error class in input fields and returning true if all .form_input_container have no error class
function submitForm(){
    let submit = true;
    // selecting all elements with form_input_container class
    const formInputs = form.querySelectorAll('.form_input_container');
    // checking for error class in each selected element
    formInputs.forEach((div)=>{
        // setting submit variables value to false if error class exists
        if(div.classList.contains('error')){
            submit = false;
        }
    });
    // returning value of submit variable
    return submit;
}

// creating function to validate thet input has been made for the rating_container class
function validate_rating(){
    let rated = false;
    // selecting all elements with rating_result class
    const ratingInputs = rated_container.querySelectorAll('.rating_result');
    // checking if any radio button is checked for each selected element
    ratingInputs.forEach((div)=>{
        // setting reted varible value as true if any radio button is checked
        if(div.checked == true){
            rated=true;
        }
    });
    // returning value of rated variable
    return rated;
}

// creating function to validate user inputs
function validateForm(){
    // taking the input value of username input field and checking if it is empty
    if(username.value.trim() == ''){
        // if empty setting calling setError() function while giving error text to be displayed
        setError(username, 'Name Is Required!');
    }else if(username.value.trim().length <5){
        // if username has charracter length shorter than 5 setting calling setError() function while giving error text to be displayed
        setError(username, 'Name Must Have A Minimum Of 5 Characters!');
    }else{
        // using setSuccess() if input valid
        setSuccess(username);
    }
    
// similar method to above used to validate other inputs
    if(email.value.trim() == ''){
        setError(email, 'Email Address Is Required!');
    // uses emailValidity() function to check valiity of user email
    }else if(emailValidity(email.value)){
        setSuccess(email);
    }else{
        setError(email, 'Email Address Invalid!');
    }

    if(reason.value.trim() == ''){
        setError(reason, 'Reason For Given Rating Is Required!');
    }else if(reason.value.trim().length <20){
        setError(reason, 'Reason Must Have A Minimum Of 20 Characters!');
    }else{
        setSuccess(reason);
    }

    if(validate_rating()==false){
        setError(rating, 'Rating Is Required!');
    }else{
        setSuccess(rating);
    }
}

// creating function to add error class while removing success class of the parent element of the parent element
// also prints th eroor message
function setError(element, errorMsg){
    const parent = element.parentElement.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const p = parent.querySelector('.error_msg');
    p.textContent = errorMsg;
}

// creating function to add success class while removing error class of the parent element of the parent element
function setSuccess(element){
    const parent = element.parentElement.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

// creating fuction that checks validity of email and return true if valid and false if invalid
function emailValidity(email){
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}
