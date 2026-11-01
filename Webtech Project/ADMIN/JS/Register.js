function collect_data()
{
    let n  = validName();
    let e  = validEmail();
    let ph = validPhone();
    let d  = validDOB();
    let g  = validGender();
    let a  = validAddress();
    let em = validEmployee();
    let de = validDesignation();
    let us = validUser();
    let pa = validPassword();
    let cp = validConfirm();
    let te = validTerms();

    let Result = document.getElementById("Result");

    if (n && e && ph && d && g && a && em && de && us && pa && cp && te)
    {
        Result.innerHTML = "Account created successfully! You can now sign in.";
    }
    else
    {
        Result.innerHTML = "";
    }
    return false;
}

function validName()
{
    let name = document.getElementById("FullName").value.trim();
    let Error = document.getElementById("NameError");
    if (name == "")
    {
        Error.innerHTML = "* Please enter your full name";
        return false;
    }
    else if (name.length < 6)
    {
        Error.innerHTML = "* Name must have at least 6 characters";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validEmail()
{
    let Email = document.getElementById("Email").value.trim();
    let Error = document.getElementById("EmailError");
    let RegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (Email == "")
    {
        Error.innerHTML = "* Please enter your email";
        return false;
    }
    else if (!RegularExpression.test(Email))
    {
        Error.innerHTML = "* Please enter the email in the correct format";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validPhone()
{
    let phone = document.getElementById("Phone").value.trim();
    let Error = document.getElementById("PhoneError");
    if (phone == "")
    {
        Error.innerHTML = "* Please enter your phone number";
        return false;
    }
    else if (phone.length != 11 || phone.slice(0, 2) != "01")
    {
        Error.innerHTML = "* Phone must be 11 digits and start with 01";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validDOB()
{
    let dob = document.getElementById("DOB").value;
    let Error = document.getElementById("DOBError");
    if (dob == "")
    {
        Error.innerHTML = "* Please select your date of birth";
        return false;
    }
    else if (dob.slice(0, 4) > 2008)
    {
        Error.innerHTML = "* You must be at least 18 years old";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validGender()
{
    let genders = document.querySelectorAll('input[name="Gender"]');
    let Error = document.getElementById("GenderError");
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
        Error.innerHTML = "* Please select your gender";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validAddress()
{
    let address = document.getElementById("Address").value.trim();
    let Error = document.getElementById("AddressError");
    if (address == "")
    {
        Error.innerHTML = "* Please enter your address";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validEmployee()
{
    let id = document.getElementById("EmployeeID").value.trim();
    let Error = document.getElementById("EmployeeError");
    if (id == "")
    {
        Error.innerHTML = "* Please enter your employee ID";
        return false;
    }
    else if (id.length < 5)
    {
        Error.innerHTML = "* Employee ID must have at least 5 characters";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validDesignation()
{
    let designation = document.getElementById("Designation").value;
    let Error = document.getElementById("DesignationError");
    if (designation == "")
    {
        Error.innerHTML = "* Please select your designation";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validUser()
{
    let user = document.getElementById("UserName").value.trim();
    let Error = document.getElementById("UserError");
    if (user == "")
    {
        Error.innerHTML = "* Please enter a username";
        return false;
    }
    else if (user.length < 4)
    {
        Error.innerHTML = "* Username must have at least 4 characters";
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
    let pass = document.getElementById("Password").value;
    let Error = document.getElementById("PasswordError");
    if (pass == "")
    {
        Error.innerHTML = "* Please enter a password";
        return false;
    }
    else if (pass.length < 6)
    {
        Error.innerHTML = "* Password must have at least 6 characters";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validConfirm()
{
    let pass = document.getElementById("Password").value;
    let confirm = document.getElementById("ConfirmPassword").value;
    let Error = document.getElementById("ConfirmError");
    if (confirm == "")
    {
        Error.innerHTML = "* Please type the password again";
        return false;
    }
    else if (pass != confirm)
    {
        Error.innerHTML = "* Passwords do not match";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validTerms()
{
    let terms = document.getElementById("Terms");
    let Error = document.getElementById("TermsError");
    if (!terms.checked)
    {
        Error.innerHTML = "* You must agree to the terms and conditions";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}
