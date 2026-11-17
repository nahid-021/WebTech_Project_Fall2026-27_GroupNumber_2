//dashboard
console.log("JS Connected");

let dashboardTrips = [
    {
        route:"Dhaka to chittangong",
        bus:"DHA-123",
        date:"2026-11-05",
        departure:"08:00AM",
        arrival:"02:00PM",
        price:750,
        seat:20,
        status:"assigned"
    },
    {
        route:"Dhaka to Sylhet",
        bus:"DHA-567",
        date:"2026-11-06",
        departure:"10:00AM",
        arrival:"10:00PM",
        price:950,
        seat:30,
        status:"assigned"
    },
    {
        route:"Dhaka to Cox's Bazar",
        bus:"DHA-321",
        date:"2026-11-12",
        departure:"12:00AM",
        arrival:"12:00PM",
        price:1750,
        seat:0,
        status:"assigned"
    },
    {
        route:"Dhaka to Rajshahi",
        bus:"DHA-4567",
        date:"2026-11-23",
        departure:"01:00AM",
        arrival:"07:00PM",
        price:550,
        seat:25,
        status:"Cancelled"
    },

];
function validateDashboardTrip(trip)
{
if(trip.price <= 0){
    return false;
}
else if(trip.seat<=0)
{
    return false;
}
else if(trip.status!="assigned")
{
    return false;
}
else{
    return true;
}
}

function showDashboardTrips(){
    let Table = document.getElementById("tripTable");
    let Count = document.getElementById("tripCount");
    let Empty = document.getElementById("emptyMsg")
    let total = 0;
for(let i = 0;i<dashboardTrips.length;i++)
     {
        let valid = validateDashboardTrip(dashboardTrips[i]);
     
     if(valid == true)
     {
        Table.innerHTML +=
        "<tr>" +
        "<td>" + dashboardTrips[i].route + "</td>" +
        "<td>" + dashboardTrips[i].bus + "</td>" +
        "<td>" + dashboardTrips[i].date + "</td>" +
        "<td>" + dashboardTrips[i].departure + "</td>" +
        "<td>" + dashboardTrips[i].arrival + "</td>" +
        "<td>" + dashboardTrips[i].price + "</td>" +
        "<td>" + dashboardTrips[i].seat + "</td>" +
        "<td>" + dashboardTrips[i].status + "</td>" +
       "</tr>";
       total++;
     }
}
Count.innerHTML = total;
if(total == 0){
    Empty.innerHTML = "No Trips assigned yet.";
}

else{
    Empty.innerHTML ="";
}
}
if(document.getElementById("tripTable")){
    showDashboardTrips();
}
