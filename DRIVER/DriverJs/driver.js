console.log("JS Connected");
// alert("js connected ");
let scheduleList = [];
let reportList = [];
//avaibality Status
function addSchedule()
{

    let Date = document.getElementById("date").value;
    let Status = document.getElementById("status").value;
    let Note = document.getElementById("note").value;
    let Error = document.getElementById("ScheduleError");

if(Date == "")
{
    Error.innerHTML = "Please Select The Date";
    return false;
}
else if (Status == "")
{
    Error.innerHTML = "Please Select The Status";
    return false;
}
else{

   let Schedule = {
    Date: Date, Status: Status, Note: Note
   };
   
    
     scheduleList.push(Schedule);
     showSchedule();

    Error.innerHTML = "Schedule Added Successfully";
    document.getElementById("date").value="";
    document.getElementById("note").value="";
    document.getElementById("status").value="";
    

    return false;
}
}

function showSchedule()
{
    let Table = document.getElementById("ScheduleTable");
    Table.innerHTML = 
    "<tr>" + 
    "<td>Date</td>" +
     "<td>Status</td>" +
      "<td>Note</td>" +
       "<td>Action</td>" +
        "</tr>";
    for(let i = 0; i<scheduleList.length;i++){
        let RowID = "ScheduleRow" + i;
     Table.innerHTML +=
    "<tr id ='" + RowID + "'>" +
     "<td>" + scheduleList[i].Date + "</td>" +
     "<td>" + scheduleList[i].Status + "</td>" +
    "<td>" + scheduleList[i].Note + "</td>" +
    "<td><button type = 'button' onclick = 'deleteSchedule("+i+")'>Delete</button></td>" +
    "</tr>";
}
}

function deleteSchedule(){
     let ConfirmDelete = confirm ("Do you want to delete this?");

    if(ConfirmDelete == true)
    {
        scheduleList.pop();
        showSchedule();
    }
}

//Safety Report
function submitReport(){
    let date = document.getElementById("reportDate").value;
    let Type = document.getElementById("type").value;
    let Description = document.getElementById("description").value.trim();
    // let Error = document.getElementById("ReportError");

    if ( date == "")
    {
        alert("Please Select The Report Date");
        return false;
    }
    else if(Description == "")
    {
        alert("Please Enter The Description");
        return false;
    }
    else if(Type == ""){
        alert("Please Select The Report Type");
        return false;
    }
    else{
        let confirmReport = confirm("Do you want to submit this Report?");

        if(confirmReport == true)
        {
           
            let Report = {
                Date:date,
                Type:Type,
                Description: Description,
            };
            reportList.push(Report);
            showReports();
            document.getElementById("reportDate").value="";
            document.getElementById("type").value="";
            document.getElementById("description").value="";
           
        }
        return false;
    }

}
function showReports(){
    let Table = document.getElementById("ReportTable");

    Table.innerHTML = 
    "<tr>" + 
    "<td>Date</td>" +
     "<td>Report Type</td>" +
      "<td>Description</td>" +
       "<td>Action</td>" +
        "</tr>";

        for (let i =0;i<reportList.length;i++)
        {
            Table.innerHTML +=
            "<tr>"+
     "<td>" + reportList[i].Date + "</td>" +
     "<td>" + reportList[i].Type + "</td>" +
    "<td>" + reportList[i].Description + "</td>" +
    "<td><button type = 'button' onclick = 'deleteReport(" + i + ")'>Delete</button></td>" +
    "</tr>";

        }
        

}

function deleteReport()
{
    let ConfirmDelete = confirm("");
    if(ConfirmDelete==true)
    {
        reportList.pop();
        showReports();
    }
    return false;
}

//Trip History
let tripList = [
    {
        id: "TR-101",
        route: "Dhaka to Chittagong",
        bus:"DHA-1234",
        date:"25-10-2026",
        departure:"08:00 AM",
        arrival:"02:00 PM",
        seats: "40",
        status:"completed",
        note:"Trip Completed Succesfully"


    },
    {
        id: "TR-102",
        route: "Dhaka to Sylhet",
        bus:"DHA-5678",
        date:"28-10-2026",
        departure:"10:00 AM",
        arrival:"08:00 PM",
        seats: "40",
        status:"cancelled",
        note:"Trip Cancelled"

    }
   
    

];
 let selectedTripID = "";
function showTrips(){
    let table = document.getElementById("TripHistoryTable");

     table.innerHTML =
     "<tr>" +
       "<td>Trip ID</td>" +
        "<td>Route</td>"+
       "<td>Bus Number</td>"+
         "<td>Trip Date</td>"+
        "<td>Status</td>"+
           "<td>Action</td>"+
     "</tr>";

    for(let i = 0;i<tripList.length;i++){
        table.innerHTML +=
        "<tr>" +
       "<td>"+ tripList[i].id+"</td>" +
        "<td>"+ tripList[i].route+"</td>" +
         "<td>"+ tripList[i].bus+"</td>" +
          "<td>"+ tripList[i].date+"</td>" +
           "<td>"+ tripList[i].status+"</td>" +
           "<td><button type = 'button' class = 'btn' onclick = \"viewDetails('" + tripList[i].id+ "')\">View Deatils</button></td>" +
    "</tr>";
       

    }
    showTripCount();
        
        
    }

    function viewDetails(tripID){
        let found = false;
        for(let i= 0;i<tripList.length;i++){
            if(tripList[i].id==tripID){
                let trip = tripList[i];
                selectedTripID = tripID;
                document.getElementById("updateStatus").value = trip.status;
                
            

                document.getElementById("detialTripID").innerHTML = "<strong>Trip ID:</strong>" + trip.id;
                document.getElementById("detialRoute").innerHTML = "<strong>Route:</strong>" + trip.route;
                document.getElementById("detialBus").innerHTML = "<strong>Bus Number:</strong>" + trip.bus ;
                document.getElementById("detialDate").innerHTML = "<strong>Date:</strong>" + trip.date;
                document.getElementById("detialDeparture").innerHTML = "<strong>Deaparture:</strong>" + trip.departure;
                document.getElementById("detialArrival").innerHTML = "<strong>Arrival:</strong>" + trip.arrival;
                
                
                document.getElementById("detialSeat").innerHTML = "<strong>seats:</strong>" + trip.seats;
                document.getElementById("detialNote").innerHTML = "<strong>Note:</strong>" + trip.note;
                

            let modal = document.getElementById("tripModal");
            modal.style.display = "grid";
        
            }
        }
       
    }

    function closeDetails(){
         let modal = document.getElementById("tripModal");
            modal.style.display = "none";
   
    }
    function showTripCount(){

        let total = tripList.length;
        let completed = 0;
        let cancelled = 0;

        for(let i=0;i<tripList.length;i++){
            if(tripList[i].status == "completed"){
                completed++;
            }
            else if(tripList[i].status=="cancelled"){
                cancelled++;
            }
        }
        document.getElementById("totalTrips").innerHTML = total;
        document.getElementById("completedTrips").innerHTML = completed;
        document.getElementById("cancelledTrips").innerHTML = cancelled;
    }
function filterTrips(){
    let search = document.getElementById("searchTrip").value.toLowerCase();
    let status = document.getElementById("filterStatus").value;

    let table = document.getElementById("TripHistoryTable");


    table.innerHTML =
    "<tr>" +
       "<td>Trip ID</td>" +
        "<td>Route</td>"+
       "<td>Bus Number</td>"+
         "<td>Trip Date</td>"+
        "<td>Status</td>"+
           "<td>Action</td>"+
     "</tr>";
    for(let i=0;i<tripList.length;i++){
        let trip = tripList[i];

        let searchMatch = 
        trip.id.toLowerCase().includes(search) ||
         trip.route.toLowerCase().includes(search) ||
          trip.bus.toLowerCase().includes(search)

          let statusMatch =
          status == "all" || trip.status == status;

          if(searchMatch && statusMatch){
          
            table.innerHTML +=
        "<tr>" +
       "<td>"+ trip.id+"</td>" +
        "<td>"+ trip.route+"</td>" +
         "<td>"+ trip.bus+"</td>" +
          "<td>"+ trip.date+"</td>" +
           "<td>"+ trip.status+"</td>" +
           "<td><button type = 'button' class = 'btn' onclick = \"viewDetails('" + trip.id+ "')\">View Deatils</button></td>" +
    "</tr>";

          }
    }
    

}
function updateTrip(){
    let status = document.getElementById("updateStatus").value;

    for(let i = 0;i<tripList.length;i++){
        if(tripList[i].id==selectedTripID){
            tripList[i].status = status;
        }
    }
   
    showTrips();
    showTripCount();
    closeDetails();
}
//passengfer verify

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

    

