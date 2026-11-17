
console.log("BusSheba Registration JavaScript Connected");



function togglePassword(id, button) {

    let password = document.getElementById(id);

    if (password.type === "password") {

        password.type = "text";

        button.innerText = "Hide";

    }

    else {

        password.type = "password";

        button.innerText = "Show";

    }

}




let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("fullName").value;

    let email = document.getElementById("email").value;

    let phone = document.getElementById("phone").value;

    let role = document.getElementById("userRole").value;

    let password = document.getElementById("password").value;

    let confirmPassword = document.getElementById("confirmPassword").value;


    

    if (password !== confirmPassword) {

        alert("Password and Confirm Password do not match!");

        return;

    }


    

    alert("Registration Successful! Welcome to BusSheba, " + name);

    console.log("Name:", name);

    console.log("Email:", email);

    console.log("Phone:", phone);

    console.log("Account Type:", role);


    

    window.location.href = "login.html";

});
