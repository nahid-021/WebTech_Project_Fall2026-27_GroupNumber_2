function goToLogin(user){
    switch(user){

        case "admin":
            // window.location.href = "";
             alert("Unknown user type:"+user);
            break;
         case "manager":
            // window.location.href = "";
             alert("Unknown user type:"+user);
            break;
         case "passenger":
            // window.location.href = "";
             alert("Unknown user type:"+user);
            break;
        case "driver":
            window.location.href = "DRIVER/DriverPages/Login.html";
            break;
        default:
                alert("Unknown user type:"+user);
    } 
}