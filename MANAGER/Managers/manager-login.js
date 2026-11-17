console.log("Manager Login JS Connected");


// Collect Data From Login Form

function collect_data()
{
    let Email = validateEmail();
    let Password = validatePassword();

    if(Email && Password)
    {
        document.getElementById("LoginMessage").innerHTML =
        "Login form validated successfully!";

        return false;
    }

    return false;
}


// Email Validation

function validateEmail()
{
    let Email = document.getElementById("ManagerEmail").value.trim();

    let Error = document.getElementById("EmailError");

    let RegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(Email === "")
    {
        Error.innerHTML = "* Please enter your manager email";
        return false;
    }

    else if(!RegularExpression.test(Email))
    {
        Error.innerHTML = "* Please enter a valid email address";
        return false;
    }

    else
    {
        Error.innerHTML = "";
        return true;
    }
}


// Password Validation

function validatePassword()
{
    let Password = document.getElementById("ManagerPassword").value;

    let Error = document.getElementById("PasswordError");

    if(Password === "")
    {
        Error.innerHTML = "* Please enter your password";
        return false;
    }

    else if(Password.length < 6)
    {
        Error.innerHTML = "* Password must contain at least 6 characters";
        return false;
    }

    else
    {
        Error.innerHTML = "";
        return true;
    }
}


// Show and Hide Password

function togglePassword()
{
    let Password = document.getElementById("ManagerPassword");

    let Button = document.querySelector(".show-password");

    if(Password.type === "password")
    {
        Password.type = "text";
        Button.innerHTML = "Hide";
    }

    else
    {
        Password.type = "password";
        Button.innerHTML = "Show";
    }
}