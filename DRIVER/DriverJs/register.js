function driverRegister(){
    let ID = validID();
    let Name = validateName();
    let Email = validateEmail();
    let Phone = validatePhone();
    let Password = validatePassword();
    let Confirm = validateConfirmPassword();

    if(ID && Name && Email && Phone && Password && Confirm)
    {
        alert("Driver Registration Succesful!");
    }
    return false;

}
function validID(){
    let DriverID = document.getElementById("registerID").value;
    let Error = document.getElementById("IDError");

if(DriverID==""){
    Error.innerHTML = "*Please Enter Driver ID";
}
else if(DriverID.length<5){
    Error.innerHTML = "Driver ID Must Carry at least 5 characters";
}
else{
    Error.innerHTML = "Driver ID:"+DriverID;
    return true;
}
return false;
}
    

function validateName(){
    let Name = document.getElementById("driverName").value.trim();
    let Error = document.getElementById("NameError");
     let expression = /^[A-Za-z. ]+$/;

    if(Name == ""){
        Error.innerHTML ="*Please Enter Your Name"
    }
    else if(Name.length<3){
        Error.innerHTML = "Name must carry at least 3 char";
    }
    else if(!expression.test(Name)){

         Error.innerHTML = "Please Enter  Email in the Correct Format";
         return false;
    }
    else{
    Error.innerHTML = "Driver Name:"+Name;
    return true;
}
return false;
}
function validateEmail()
{
    let Email = document.getElementById("registerEmail").value;
    let Error = document.getElementById("EmailError");
    let RegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(Email=="")
    {
        Error.innerHTML = "Please Enter Your Email";
    }
    else if (!RegularExpression.test(Email))
    {
        Error.innerHTML = "Please Enter  Email in the Correct Format";
    }
    else{
        Error.innerHTML = "Patient Email: "+Email;
        return true;
    }
    return false;
}
function validatePhone()
{
    let Phone = document.getElementById("registerNumber").value.trim();
    let Error = document.getElementById("PhoneError");
    let expression = /^01[3-9][0-9]{8}$/;
    
    if(Phone=="")
    {
        Error.innerHTML = "Please Enter The Phone Number";
    }
   
    else if(!expression.test(Phone)){
        Error.innerHTML = "Number Must Contain 11 Digits";
    }
    else{
        Error.innerHTML = "Phone Number: "+Phone;
        return true;
    }
    return false;
}
function validatePassword(){
    let password = document.getElementById("registerpassword").value;
    let Error = document.getElementById("passwordError");

    if(password == ""){
        Error.innerHTML = "*Please Enter password";
        return false;
    }
     else if (password.length<6)
    {
        Error.innerHTML = "Must Contain 6 charcter";
        return false;
    }
     let found = false;
    for(let i =0;i<password.length;i++){
        if(password[i]=="@"|| password[i]=="$"|| password[i]=="#"||
            password[i]=="%"|| password[i]=="&"
        ){
            found = true;
        }
    }
    if(found==false){
        Error.innerHTMl="Pasword must contain this charcter(@,#,$,%)!";
    }
    else{
        Error.innerHTML = "Password Accepted";
        return true;
    }
    
}
function validateConfirmPassword()
{
    let Password = document.getElementById("registerpassword").value;
    let ConfirmPassword = document.getElementById("confirmPassword").value;
    let Error = document.getElementById("ConfirmError");

    if (ConfirmPassword == "")
    {
        Error.innerHTML = "*Please Confirm Your Password";
        return false;
    }
    else if (Password != ConfirmPassword)
    {
        Error.innerHTML = "*Passwords Do Not Match";
        return false;
    }
    else
    {
        return true;
    }
}