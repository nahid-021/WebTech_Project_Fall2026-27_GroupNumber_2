function validateForm()
{
    let user = validUser();
    let pass = validPass();
    let LoginError = document.getElementById("LoginError");

    LoginError.innerHTML = "";

    if (user && pass)
    {
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value;

        if (username == "nahid" && password == "1234")
        {
            return true;
        }
        else
        {
            LoginError.innerHTML = "* Incorrect username or password";
        }
    }
    return false;
}

function validUser()
{
    let user = document.getElementById("username").value.trim();
    let UserError = document.getElementById("UserError");
    if (user == "")
    {
        UserError.innerHTML = "* Please enter your username";
        return false;
    }
    else
    {
        UserError.innerHTML = "";
        return true;
    }
}

function validPass()
{
    let pass = document.getElementById("password").value;
    let PassError = document.getElementById("PassError");
    if (pass == "")
    {
        PassError.innerHTML = "* Please enter your password";
        return false;
    }
    else
    {
        PassError.innerHTML = "";
        return true;
    }
}


