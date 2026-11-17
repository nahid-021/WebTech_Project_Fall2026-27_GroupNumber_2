
console.log("Maintenance Requests JS Connected");




let requestList = [];




let defaultRequests = [

    {
        bus: "Green Line (DHAKA-BA-1234)",
        issue: "service issue",
        status: "Done",
        reported: "2026-10-31 02:18"
    },

    {
        bus: "Hanif Enterprise (DHAKA-BA-2001)",
        issue: "tire issue",
        status: "Cancelled",
        reported: "2026-10-31 02:19"
    }

];




function loadRequests() {

    let savedRequests = localStorage.getItem("maintenanceRequests");

    if (savedRequests !== null) {

        requestList = JSON.parse(savedRequests);

    }

    else {

        requestList = defaultRequests;

        saveRequests();

    }

}




function saveRequests() {

    localStorage.setItem(
        "maintenanceRequests",
        JSON.stringify(requestList)
    );

}




function showRequests(list = requestList) {

    let Table = document.getElementById("requestTable");

    let Empty = document.getElementById("emptyMsg");

    Table.innerHTML = "";

    if (list.length === 0) {

        Empty.innerHTML = "No maintenance requests found.";

        return;

    }

    else {

        Empty.innerHTML = "";

    }


    for (let i = 0; i < list.length; i++) {

        let statusClass = "";

        if (list[i].status === "Done") {

            statusClass = "done";

        }

        else if (list[i].status === "Cancelled") {

            statusClass = "cancelled";

        }

        else {

            statusClass = "pending";

        }


        Table.innerHTML +=

            "<tr>" +

            "<td>" + escapeHTML(list[i].bus) + "</td>" +

            "<td>" + escapeHTML(list[i].issue) + "</td>" +

            "<td><span class='status " + statusClass + "'>" +

            escapeHTML(list[i].status) +

            "</span></td>" +

            "<td>" + escapeHTML(list[i].reported) + "</td>" +

            "<td class='action'>—</td>" +

            "</tr>";

    }

}





function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, function(character) {

        return {

            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"

        }[character];

    });

}





let maintenanceForm = document.getElementById("maintenanceForm");


maintenanceForm.addEventListener("submit", function(event) {

    event.preventDefault();


    let bus = document.getElementById("bus").value;

    let issue = document.getElementById("issue").value.trim();


    if (bus === "" || issue === "") {

        alert("Please fill in all required fields.");

        return;

    }


    let currentDate = new Date();

    let formattedDate =

        currentDate.getFullYear() + "-" +

        String(currentDate.getMonth() + 1).padStart(2, "0") + "-" +

        String(currentDate.getDate()).padStart(2, "0") + " " +

        String(currentDate.getHours()).padStart(2, "0") + ":" +

        String(currentDate.getMinutes()).padStart(2, "0");


    let newRequest = {

        bus: bus,

        issue: issue,

        status: "Pending",

        reported: formattedDate

    };


    requestList.push(newRequest);


    saveRequests();

    showRequests();


    maintenanceForm.reset();


    alert("Maintenance request submitted successfully!");

});





function searchRequests() {

    let searchValue = document.getElementById("searchRequest")
        .value.toLowerCase().trim();


    let filteredRequests = requestList.filter(function(request) {

        return (

            request.bus.toLowerCase().includes(searchValue) ||

            request.issue.toLowerCase().includes(searchValue) ||

            request.status.toLowerCase().includes(searchValue)

        );

    });


    showRequests(filteredRequests);

}




document.getElementById("searchBtn").addEventListener("click", function() {

    searchRequests();

});





document.getElementById("searchRequest").addEventListener("keyup", function(event) {

    if (event.key === "Enter") {

        searchRequests();

    }

});




document.getElementById("signout").addEventListener("click", function() {

    let confirmSignout = confirm("Are you sure you want to sign out?");

    if (confirmSignout) {

        alert("You have signed out.");

    }

});





loadRequests();

showRequests();

