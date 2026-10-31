function collect_data()
{
    let Username = validUsername();
    let Password = validPassword();

    if (Username && Password)
    {
        window.location.href = "Passenger-HomePage.html";
    }

    return false;
}

function validUsername()
{
    let Username = document.getElementById("username").value;
    let Error = document.getElementById("usernameError");

    if (Username == "")
    {
        Error.innerHTML = "* Please Enter Your Username";
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
    let Password = document.getElementById("password").value;
    let Error = document.getElementById("passwordError");

    if (Password == "")
    {
        Error.innerHTML = "* Please Enter Your Password";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}