let reportList = [];

function submitReport(){
    let date = document.getElementById("reportDate").value;
    let Type = document.getElementById("type").value;
    let Description = document.getElementById("description").value.trim();
    

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
        reportList.splice(i,1);
        showReports();
    }
    return false;
}