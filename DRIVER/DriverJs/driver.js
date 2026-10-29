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
    "<td><button type = 'button' onclick = 'deleteSchedule()'+>Delete</button></td>" +
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

    

