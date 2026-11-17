function goToLogin(user){
    switch(user){

        case "admin":
            window.location.href = "ADMIN/Page/login.html";
            //  alert("Unknown user type:"+user);
            break;
         case "manager":
            window.location.href = "MANAGER/ManagerPage/manager-login.html";
            break;
         case "passenger":
            window.location.href ="PASSENGER/Page/Passenger-LoginPage.html";
            break;
        case "driver":
            window.location.href = "DRIVER/DriverPages/Login.html";
            break;
        default:
                alert("Unknown user type:"+user);
    } 
}