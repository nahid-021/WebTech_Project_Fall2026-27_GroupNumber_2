console.log("JS Connected");


let scheduleList = [];
function validateRadio(groupName,errorId,label){
    let options = document.querySelectorAll('input[name="'+groupName+'"]');
    let Error = document.getElementById(errorId);
    let selected = "";

    for(let i=0;i<options.length;i++){
        if(options[i].checked){
            selected = options[i].value;
            break;
        }
    }
    if(selected ==""){
        Error.innerHTML = "Please Select the Shift";
        return false;
    }
    Error.innerHTML="";
    return true;
}
function addSchedule()
{

    let date = document.getElementById("date").value;
    let status = document.getElementById("status").value;
    let note = document.getElementById("note").value;

    let dateError = document.getElementById("dateError");
    let statusError = document.getElementById("statusError");
    let noteError = document.getElementById("noteError");

    dateError.innerHTML = "";
    statusError.innerHTML = "";
    noteError.innerHTML = "";

    let shiftOK = validateRadio("shift","shiftError","Shift");
    let shiftOptions = document.querySelectorAll('input[name="shift"]');
    let shift="";

    for(let i =0;i<shiftOptions.length;i++){
        if(shiftOptions[i].checked)
        {
            shift = shiftOptions[i].value;
            break;
        }
    }
if(date == "")
{
     dateError.innerHTML = "Please Select The date";   
}
if (status == "")
{
    statusError.innerHTML = "Please Select The Status";
}
if(note == "")
{
   noteError.innerHTML = "Please Write The note";
}
if(date == "" || status ==""|| note==""|| shiftOK == false)
{
    return false;
}
let Schedule = {
    Date: date, Status: status,Shift:shift, Note: note
   };    
     scheduleList.push(Schedule);
     showSchedule();    
    document.getElementById("date").value="";
    document.getElementById("note").value="";
    document.getElementById("status").value="";

    for(let i =0;i<shiftOptions.length;i++){
        shiftOptions[i].checked=false;
    }
    return false;
}

function showSchedule()
{
    let Table = document.getElementById("ScheduleTable");
    Table.innerHTML = 
    "<tr>" + 
    "<td>Date</td>" +
    "<td>Status</td>" +
    "<td>Shift</td>" +
    "<td>Note</td>" +
    "<td>Action</td>" +
    "</tr>";
    for(let i = 0; i<scheduleList.length;i++){
        let RowID = "ScheduleRow" + i;
     Table.innerHTML +=
    "<tr id ='" + RowID + "'>" +
     "<td>" + scheduleList[i].Date + "</td>" +
     "<td>" + scheduleList[i].Status + "</td>" +
     "<td>" + scheduleList[i].Shift + "</td>" +
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
