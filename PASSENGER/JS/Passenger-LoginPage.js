function validateLogin()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let loginError = document.getElementById("loginError");

    loginError.textContent = "";

    if (username.trim() == "")
    {
        loginError.textContent = "Username cannot be empty.";
        return false;
    }
    else if (password.trim() == "")
    {
        loginError.textContent = "Password cannot be empty.";
        return false;
    }
    else
    {        
        window.location.href="Passenger-HomePage.html";
        return false;
    }
}