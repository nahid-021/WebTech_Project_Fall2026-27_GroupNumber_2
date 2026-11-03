function check_login()
{
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value;
    let UserError = document.getElementById("UserError");
    let PassError = document.getElementById("PassError");
    let LoginError = document.getElementById("LoginError");
    let valid = true;

    if (user == "")
    {
        UserError.innerHTML = "* Please enter your username";
        valid = false;
    }

    if (pass == "")
    {
        PassError.innerHTML = "* Please enter your password";
        valid = false;
    }

    if (valid)
    {
        if (user == "nahid" && pass == "1234")
        {
            window.location.href = "dashboard.html";
        }
        else
        {
            LoginError.innerHTML = "* Incorrect username or password";
        }
    }

    return false;
}
