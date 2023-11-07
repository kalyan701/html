const form = document.querySelector('#form')
const username = document.querySelector('#username')
const contactnumber=document.querySelector('#contactnumber')
const alternatecontactnumber=document.querySelector('#alternatecontactnumber')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmpassword = document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateform();
})

function validateform(){
    const usernameval=username.value.trim();
    const contactnumberval=contactnumber.value.trim();
    const alternatecontactnumberval=alternatecontactnumber.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const confirmpasswordval=confirmpassword.value.trim();

    if(usernameval===''){
        seterror(username,'username is required')
    }
    else{
        setsuccess(username)
    }
    if(emailval===''){
        seterror(email,'email is required')

    }
    else if(emailval.search(/[@],[.]/)==-1){
        seterror(email,'email should have @ symbol and   "."')
    }
    else if(!validateEmail(emailval)){
        seterror(email,'please enter valid email')
    }
    else{
        setsuccess(email)
    }
    
    if(contactnumberval===''){
        seterror(contactnumber,'contact number is required')
     }
   
    else if(contactnumberval.length<10){
        seterror(contactnumber,'contact number must be 10 digits')
    }
    else if(contactnumberval.search(/[a-z\A-Z]/)==0){
        seterror(contactnumber,'contact number should contain only number')
    }
    if(alternatecontactnumberval===''){
        seterror(alternatecontactnumber,'alternate contact number is required')
     }
   
    else if(alternatecontactnumberval.length<10){
        seterror(alternatecontactnumber,'alternate contact number must be 10 digits')
    }
    else if(alternatecontactnumberval.search(/[a-z\A-Z]/)==0){
        seterror(alternatecontactnumber,'alternate contact number should contain only number')
    }
    else{
        setsuccess(alternatecontactnumber)
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
        seterror(confirmpassword,'confirmpassword is required')
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

const validatecontact=(contactnumber)=>{
    return Number(contactnumber)
    .match(
        /^\d{10}$/
    );

}
const validatealternatecontact=(alternatecontactnumber)=>{
    return Number(alternatecontactnumber)
    .match(
        /^\d{10}$/
    );

}