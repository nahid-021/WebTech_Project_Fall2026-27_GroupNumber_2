
console.log("Manager Dashboard JS Connected");




let PARTS_KEY = "busShebaParts";
let REQUESTS_KEY = "busShebaRequests";
let SERVICES_KEY = "busShebaServices";
let BUSES_KEY = "busShebaBuses";




if (localStorage.getItem(PARTS_KEY) == null) {

    let partsList = [
        {
            name: "Engine Oil",
            stock: 0,
            price: 10
        }
    ];

    localStorage.setItem(PARTS_KEY, JSON.stringify(partsList));
}




if (localStorage.getItem(REQUESTS_KEY) == null) {

    let requestList = [];

    localStorage.setItem(REQUESTS_KEY, JSON.stringify(requestList));
}




if (localStorage.getItem(SERVICES_KEY) == null) {

    let serviceList = [
        {
            bus: "Green Line (DHAKA-BA-1234)",
            date: "2026-09-16",
            workDone: "Regular servicing",
            laborCost: 100,
            partsCost: 10
        }
    ];

    localStorage.setItem(SERVICES_KEY, JSON.stringify(serviceList));
}




if (localStorage.getItem(BUSES_KEY) == null) {

    let busList = [];

    localStorage.setItem(BUSES_KEY, JSON.stringify(busList));
}




let partsList = JSON.parse(localStorage.getItem(PARTS_KEY)) || [];

let requestList = JSON.parse(localStorage.getItem(REQUESTS_KEY)) || [];

let serviceList = JSON.parse(localStorage.getItem(SERVICES_KEY)) || [];

let busList = JSON.parse(localStorage.getItem(BUSES_KEY)) || [];




function formatMoney(amount) {

    return "৳" + Number(amount).toFixed(2);

}




function validateBusService(bus) {

    if (bus.needsService == true) {
        return true;
    }

    if (bus.nextServiceDate != null &&
        bus.nextServiceDate <= new Date().toISOString().split("T")[0]) {

        return true;
    }

    return false;

}



function showBusesNeedingService() {

    let Count = document.getElementById("buses");

    let total = 0;

    for (let i = 0; i < busList.length; i++) {

        if (validateBusService(busList[i]) == true) {

            total++;

        }

    }

    Count.innerHTML = total;

}




function validateRequest(request) {

    let status = request.status.toLowerCase();

    if (status == "pending" || status == "in progress") {

        return true;

    }

    return false;

}




function showOpenRequests() {

    let Count = document.getElementById("requests");

    let Table = document.getElementById("openRequests");

    let total = 0;

    let output = "";

    for (let i = 0; i < requestList.length; i++) {

        if (validateRequest(requestList[i]) == true) {

            output +=
                "<tr>" +
                "<td>" + escapeHTML(requestList[i].bus) + "</td>" +
                "<td>" + escapeHTML(requestList[i].issue) + "</td>" +
                "<td><span class='status pending'>" +
                escapeHTML(requestList[i].status) +
                "</span></td>" +
                "</tr>";

            total++;

        }

    }

    Count.innerHTML = total;

    if (total == 0) {

        Table.innerHTML = "No open requests right now.";

    }

    else {

        Table.innerHTML =
            "<table>" +
            "<thead>" +
            "<tr>" +
            "<th>Bus</th>" +
            "<th>Issue</th>" +
            "<th>Status</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            output +
            "</tbody>" +
            "</table>";

    }

}




function showServiceAlerts() {

    let Alert = document.getElementById("serviceAlert");

    let output = "";

    let total = 0;

    for (let i = 0; i < busList.length; i++) {

        if (validateBusService(busList[i]) == true) {

            output +=
                "<p>" +
                "<strong>" + escapeHTML(busList[i].name) + "</strong>" +
                " - Service required" +
                "</p>";

            total++;

        }

    }

    if (total == 0) {

        Alert.innerHTML = "No buses currently need servicing.";

    }

    else {

        Alert.innerHTML = output;

    }

}




function validateLowStock(part) {

    if (Number(part.stock) <= 5) {

        return true;

    }

    return false;

}




function showLowStockParts() {

    let Table = document.getElementById("partsTable");

    let Count = document.getElementById("lowStock");

    let total = 0;

    let output = "";

    for (let i = 0; i < partsList.length; i++) {

        if (validateLowStock(partsList[i]) == true) {

            output +=
                "<tr>" +
                "<td>" + escapeHTML(partsList[i].name) + "</td>" +
                "<td>" +
                Number(partsList[i].stock) +
                " <span class='low'>Low</span>" +
                "</td>" +
                "<td>" + formatMoney(partsList[i].price) + "</td>" +
                "</tr>";

            total++;

        }

    }

    Count.innerHTML = total;

    if (total == 0) {

        Table.innerHTML =
            "<tr><td colspan='3'>No low-stock parts available.</td></tr>";

    }

    else {

        Table.innerHTML = output;

    }

}




function calculateMaintenanceCost() {

    let labor = 0;

    let parts = 0;

    let total = 0;

    for (let i = 0; i < serviceList.length; i++) {

        labor += Number(serviceList[i].laborCost) || 0;

        parts += Number(serviceList[i].partsCost) || 0;

    }

    total = labor + parts;

    document.getElementById("laborCost").innerHTML =
        formatMoney(labor);

    document.getElementById("partsCost").innerHTML =
        formatMoney(parts);

    document.getElementById("reportTotal").innerHTML =
        formatMoney(total);

    document.getElementById("totalCost").innerHTML =
        formatMoney(total);

}




function escapeHTML(value) {

    let div = document.createElement("div");

    div.textContent = value == null ? "" : String(value);

    return div.innerHTML;

}




function updateDashboard() {

    // Reload latest data

    partsList = JSON.parse(localStorage.getItem(PARTS_KEY)) || [];

    requestList = JSON.parse(localStorage.getItem(REQUESTS_KEY)) || [];

    serviceList = JSON.parse(localStorage.getItem(SERVICES_KEY)) || [];

    busList = JSON.parse(localStorage.getItem(BUSES_KEY)) || [];


    

    showBusesNeedingService();

    showOpenRequests();

    showServiceAlerts();

    showLowStockParts();

    calculateMaintenanceCost();

}




document.getElementById("signout").addEventListener("click", function() {

    let confirmLogout = confirm("Are you sure you want to sign out?");

    if (confirmLogout == true) {

        alert("You have signed out successfully.");

        
    }

});




window.addEventListener("storage", function(event) {

    if (
        event.key == PARTS_KEY ||
        event.key == REQUESTS_KEY ||
        event.key == SERVICES_KEY ||
        event.key == BUSES_KEY
    ) {

        updateDashboard();

    }

});


// Run Dashboard

if (document.getElementById("buses") != null) {

    updateDashboard();

}
