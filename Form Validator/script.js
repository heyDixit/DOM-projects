const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerText=message;
}

// Show input success message
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className='form-control success';
}

// email validation
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Check input is empty or not 
function inputCheck(input){
    if(input.value == ''){
        showError(input, `${input.id} is required`); 
    }
    else if(input==email){
        if(!validateEmail(email.value)){
            showError(email, 'not valid'); 
        } else {
            
            showSuccess(email);
        }
    }
    else{
        showSuccess(input);
    }
}
// Event Listener

form.addEventListener('submit', function(e){
    e.preventDefault();
    inputCheck(username);
    inputCheck(email);
    inputCheck(password);
    inputCheck(password2);
    
})