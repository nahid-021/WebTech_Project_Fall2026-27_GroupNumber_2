function check_login()
{
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value;
    let UserError = document.getElementById("UserError");
    let PassError = document.getElementById("PassError");
    let LoginError = document.getElementById("LoginError");
    let valid = true;

    UserError.innerHTML = "";
    PassError.innerHTML = "";
    LoginError.innerHTML = "";

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
        if (user == "admin" && pass == "admin123")
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
