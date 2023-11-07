const form = document.querySelector('#form')

const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmpassword = document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateform();
})

function validateform(){
  
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const confirmpasswordval=confirmpassword.value.trim();

  
    if(emailval===''){
        seterror(email,'email is required')

    }
    else if(emailval.search(/[@]/)==-1){
        seterror(email,'email should contain @ symbol')
    }
    else if(emailval.search(/[.]/)==-1){
        seterror(email,'email should contain "."')
    }

    else{
        setsuccess(email)
    }
   
    if(passwordval===''){
        seterror(password,'password is required')
    }
    else if(passwordval.length <6){
        seterror(password,'password must be aleast 6 characters')
    }
    else if(passwordval.search(/[0-9]/)==-1){
        seterror(password,'password should contain atleast 1 numeric character')
    }
    else if(passwordval.search(/[a-z]/)==-1){
        seterror(password,'password should contain atleast 1 lowercase character')
    }
    else if(passwordval.search(/[A-Z]/)==-1){
        seterror(password,'password should contain atleast 1 Uppercase character')
    }
    else if(passwordval.search(/[!\@\#\$\%\^\&\*]/)==-1){
        seterror(password,'password should contain atleast 1 Special character')
    }
    else{
        setsuccess(password)
    }
    if(confirmpasswordval===''){
        seterror(confirmpassword,'confirm password is required')
     }
     else if(confirmpasswordval !== passwordval){
        seterror(confirmpassword,'password does not match')
     }
     else{
        setsuccess(confirmpassword)
     }

}

function seterror(element,message){
    const inputgroup =element.parentElement;
    const errorelement = inputgroup.querySelector('.error')

    errorelement.innerText=message;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')
}

function setsuccess(element){
    const inputgroup =element.parentElement;
    const errorelement = inputgroup.querySelector('.error')

    errorelement.innerText='';
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
}

// const validateEmail=(email)=>{
//     return String(email)
//     .toLowerCase()
//     .match(
//         /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     );

// }
const validatephone=(phonenumber)=>{
    return Number(phonenumber)
    .match(
        /^\d{10}$/
    );

}