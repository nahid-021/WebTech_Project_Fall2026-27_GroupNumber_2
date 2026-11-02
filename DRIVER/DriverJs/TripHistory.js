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
        "<td><button type = 'button' class = 'btn' onclick = \"viewDetails('" + tripList[i].id+ "')\">View Details</button></td>" +
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
               
                

            let modal = document.getElementById("tripModal");
            modal.style.display = "block";
        
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
    let Table = document.getElementById("TripHistoryTable");
    let total = 0;

    Table.innerHTML = "";
    for(let i =0;i<tripList.length;i++){
        let validID = tripList[i].id.toLowerCase() == search;
         let validRoute = tripList[i].route.toLowerCase() == search;
          let validBus = tripList[i].bus.toLowerCase() == search;
           let validStatus = tripList[i].status.toLowerCase().trim() == search.trim();

           let isMatch = validID || validRoute || validBus || validStatus;
          
           if(isMatch == true)
           {
            Table.innerHTML +=
            "<tr>" +
       "<td>"+ tripList[i].id+"</td>" +
        "<td>"+ tripList[i].route+"</td>" +
         "<td>"+ tripList[i].bus+"</td>" +
          "<td>"+ tripList[i].date+"</td>" +
           "<td>"+ tripList[i].status+"</td>" +
          "</tr>";
          total++;
           }
    }
    if(total == 0){
        Table.innerHTML = "<tr> No trips found.</tr>";
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