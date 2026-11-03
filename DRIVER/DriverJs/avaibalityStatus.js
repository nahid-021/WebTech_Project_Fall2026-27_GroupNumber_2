console.log("JS Connected");
let scheduleList = [];


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

function deleteSchedule(i){
     let ConfirmDelete = confirm ("Do you want to delete this?");

    if(ConfirmDelete == true)
    {
        scheduleList.splice(i,1);
        showSchedule();
    }
}
