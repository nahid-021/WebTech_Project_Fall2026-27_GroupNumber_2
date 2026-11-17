function driverLogin(){
    let driverID = document.getElementById("driverID").value.trim();
    let password = document.getElementById("password").value;

    if(driverID == "" || password == ""){
        alert("Invalid Driver ID!");
        return false;
    }
    
    if(driverID!="DRIVER101"){
        alert("Invalid");
        return false;

    }
    if(password.length < 5){
        alert("Password must contain at least 5 characters!");
        return false;
    }
    let found = false;
    for(let i =0;i<password.length;i++){
        if(password[i]=="@"|| password[i]=="$"|| password[i]=="#"||
            password[i]=="%"|| password[i]=="&"
        ){
            found = true;
        }
    }
    if(found==false){
        alert("Pasword must contain this charcter(@,#,$,%,&)!")
    }
    if(password == "123@456"){
        alert("Welcome to BusSheba Driver Panel!");
        return true;
    }
    else{
        alert("Incorrect Password");
    }
}
