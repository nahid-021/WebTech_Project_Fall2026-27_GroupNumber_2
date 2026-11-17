let passengerList = [
{
    bookingID : "BK101",
    name:"Rahim",
    route:"Dhaka to Chittagong",
    bus:"DHA-1234",
    seat:"A1",
    status:"Not Verified"
},
{
 bookingID : "BK102",
    name:"Samia",
    route:"Dhaka to Sylhet",
    bus:"DHA-4567",
    seat:"B1",
    status:"Not Verified"
}
];
let selectedPassengerID = "";
function verifyPassenger(){
    let bookingID = document.getElementById("bookingID").value;
    let found=false;
    for(let i = 0;i<passengerList.length;i++){
        if(passengerList[i].bookingID==bookingID){
            found=true;
            selectedPassengerID=bookingID;
            document.getElementById("passengerDetails").style.display = "block";
            document.getElementById("passengerName").innerHTML = "<strong>Name:</strong>" + passengerList[i].name;
            document.getElementById("passengerBus").innerHTML = "<strong>Bus Number:</strong>" + passengerList[i].bus;
            document.getElementById("passengerRoute").innerHTML = "<strong>Route:</strong>" + passengerList[i].route;
            document.getElementById("passengerSeat").innerHTML = "<strong>Seat:</strong>" + passengerList[i].seat;
            document.getElementById("passengerStatus").innerHTML = "<strong>Status:</strong>" + passengerList[i].status;
            document.getElementById("verifyMessage").innerHTML="";
        }
    }
    if(found==false){
        document.getElementById("passengerDetails").style.display="none";
        document.getElementById("verifyMessage").innerHTML = "Invalid Booking Id! passenger Not Found";
    }
}
function confirmPassenger(){

    for(let i =0;i<passengerList.length;i++){
        if(passengerList[i].bookingID == selectedPassengerID){
            passengerList[i].status = "verified";
            document.getElementById("passengerStatus").innerHTML = "<strong>Status:</strong> Verified";
        }
    }
}
