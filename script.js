const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const  password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;

}
//show success message
function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
//Email checker 
function isValid(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
}
//check required function
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
      console.log(input.id)
      showError(input,` ${getFieldName(input)} is required`);
    }else {
      showSuccess(input);
    }
  });
}
// Get field
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Event listeners
form.addEventListener('submit', function(e){
  e.preventDefault();
 
  checkRequired([username, email, password, password2]);
//   if(username.value === ''){
//     showError(username ,'Username is required');

//   }else {
// showSuccess(username)
//   }

//   if(email.value === ''){
//     showError(email ,'Email is required');
//    } else if(!isValid(email.value)) {
//     showError(email ,'Email is not valid');
//   }else {
// showSuccess(email)
//   }

//   if(password.value === ''){
//     showError(password ,'Password is required');

//   }else {
// showSuccess(password)
//   }

//   if(password2.value === ''){
//     showError(password2 ,'Password  is required again');

//   }else {
// showSuccess(password2)
//   }

});

