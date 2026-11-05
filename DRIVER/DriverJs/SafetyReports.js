
console.log("JS Connected");
let reportList = [];

function submitReport(){
    let date = document.getElementById("reportDate").value;
    let Type = document.getElementById("type").value;
    let Description = document.getElementById("description").value.trim();

    document.getElementById("dateError").innerHTML = "";
    document.getElementById("typeError").innerHTML = "";
    document.getElementById("descError").innerHTML = "";
    document.getElementById("issueError").innerHTML = "";
    
    let issueOk = validateCheckbox();
    if ( date == "")
    {
         document.getElementById("dateError").innerHTML = "Please Select the report date";
    }
     if(Type == "")
    {
         document.getElementById("typeError").innerHTML = "Please Select the report type";
    }
    if(Description == ""){
         document.getElementById("descError").innerHTML = "Please Select the report description";
    }
    if(date == ""|| Type == "" || Description==""||issueOk==false){
        return false;
    }
        let confirmReport = confirm("Do you want to submit this Report?");
        if(confirmReport == true)
        {
            let Issue=[];
            let boxes = document.querySelectorAll('input[name="issues"]');
             for(let i =0;i<boxes.length;i++){
                 if(boxes[i].checked){
                     Issue.push(boxes[i].value);
    }
}
              let Report = {
                Date:date,
                Type:Type,
                Issue:Issue.join(","),
                Description: Description,
            };
            reportList.push(Report);
            showReports();
            document.getElementById("reportDate").value="";
            document.getElementById("type").value="";
            document.getElementById("description").value="";
            for(let i = 0; i < boxes.length; i++)
              {
                boxes[i].checked = false;
               }
           
        }
        return false;
    }
function showReports(){
    let Table = document.getElementById("ReportTable");

    Table.innerHTML = 
    "<tr>" + 
    "<td>Date</td>" +
    "<td>Report Type</td>" +
   "<td>Description</td>" +
    "<td>Safety Issues</td>" +
    "<td>Action</td>" +
    "</tr>";

        for (let i =0;i<reportList.length;i++)
        {
            Table.innerHTML +=
            "<tr>"+
    "<td>" + reportList[i].Date + "</td>" +
    "<td>" + reportList[i].Type + "</td>" +
    "<td>" + reportList[i].Description + "</td>" +
    "<td>" + reportList[i].Issue + "</td>" +
    "<td><button type = 'button' onclick = 'deleteReport(" + i + ")'>Delete</button></td>" +
    "</tr>";

        }
}

function validateCheckbox(){
    let boxes = document.querySelectorAll('input[name="issues"]');
    let ErrorIssue = document.getElementById("issueError");
    let selected = [];
    for(let i =0;i<boxes.length;i++){
        if(boxes[i].checked){
            selected.push(boxes[i].value);
        }
    }
    if(selected.length===0){
        ErrorIssue.textContent = "Please select at least one Safety Issue.";
        return false;
    }
    else{
    ErrorIssue.textContent = "";
    return true;
}
}
function deleteReport(i)
{
    let ConfirmDelete = confirm("");
    if(ConfirmDelete==true)
    {
        reportList.splice(i,1);
        showReports();
    }
    return false;
}