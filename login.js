var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);



function validated(){
    if(email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}
function email_Verify(){
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function pass_Verify(){
    if (password.value.length >= 8) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
    if(emailval===''){
        seterror(email,'email is required')
    }
    else if(emailval.search(/[@],[.]/)==-1){
        seterror(email,'email should have @ symbol and   "."')
    }
}
function validateForm() {
    var emailOrPhone = document.getElementById("emailOrPhone").value;
    

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
        alert("Please enter a valid email or phone number.");
        return false;
    }
    return true;
}
    const validatecontact=(contactnumber)=>{
        return Number(contactnumber)
        .match(
            /^\d{10}$/
        );
}

