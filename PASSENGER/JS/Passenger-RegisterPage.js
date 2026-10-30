function collect_data()
{
    let Name = validName();
    let Gender = ValidateGender();
    let Age = validAge();
    let Email = validateEmail();
    let Username = validUsername();
    let Password = validPassword();
    let ConfirmPassword = validateConfirmPassword();

    if (Name && Gender && Age && Email && Username && Password && ConfirmPassword)
    {
        return false;
    }
    else
    {
        return false;
    }
}

function validName()
{
    let Name = document.getElementById("Name").value;
    let Error = document.getElementById("NameError");

    if (Name == "")
    {
        Error.innerHTML = "Please Enter Your Name";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function ValidateGender()
{
    let genders = document.querySelectorAll('input[name="Gender"]');
    let GenderError = document.getElementById("GenderError");
    let selectGender = "";

    for (let i = 0; i < genders.length; i++)
    {
        if (genders[i].checked)
        {
            selectGender = genders[i].value;
            break;
        }
    }

    if (selectGender == "")
    {
        GenderError.innerHTML = "Please Select Your Gender";
        return false;
    }
    else
    {
        GenderError.innerHTML = "";
        return true;
    }
}

function validAge()
{
    let Age = document.getElementById("Age").value;
    let Error = document.getElementById("AgeError");

    if (Age == "")
    {
        Error.innerHTML = "Please Enter Your Age";
        return false;
    }
    else if (Age < 1 || Age > 100)
    {
        Error.innerHTML = "Age Must Be Between 1 and 100";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validateEmail()
{
    let Email = document.getElementById("Email").value;
    let Error = document.getElementById("EmailError");

    let RegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (Email == "")
    {
        Error.innerHTML = "Please Enter Your Email";
        return false;
    }
    else if (!RegularExpression.test(Email))
    {
        Error.innerHTML = "Please Enter a Valid Email";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validUsername()
{
    let Username = document.getElementById("Username").value;
    let Error = document.getElementById("UsernameError");

    if (Username == "")
    {
        Error.innerHTML = "Please Enter Your Username";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validPassword()
{
    let Password = document.getElementById("Password").value;
    let Error = document.getElementById("PasswordError");

    if (Password == "")
    {
        Error.innerHTML = "Please Enter Your Password";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validateConfirmPassword()
{
    let Password = document.getElementById("Password").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;
    let Error = document.getElementById("ConfirmPasswordError");

    if (ConfirmPassword == "")
    {
        Error.innerHTML = "Please Confirm Your Password";
        return false;
    }
    else if (Password != ConfirmPassword)
    {
        Error.innerHTML = "Passwords Do Not Match";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}