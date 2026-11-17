
console.log("JS Connected");



let serviceList = [

    {
        bus: "Green Line (DHAKA-BA-1234)",
        date: "2026-09-16",
        workDone: "work done",
        parts: "hello x1",
        cost: 100
    }

];




function validateService(service) {

    if (service.bus === "") {

        return false;

    }

    else if (service.date === "") {

        return false;

    }

    else if (service.cost === "" || service.cost < 0) {

        return false;

    }

    else if (service.workDone === "") {

        return false;

    }

    else {

        return true;

    }

}




function showServiceHistory(list = serviceList) {

    let Table = document.getElementById("serviceTable");

    let Empty = document.getElementById("emptyMsg");


    if (Table == null) {

        return;

    }


    Table.innerHTML = "";


    for (let i = 0; i < list.length; i++) {

        let Index = serviceList.indexOf(list[i]);


        Table.innerHTML +=

            "<tr>" +

            "<td>" + list[i].bus + "</td>" +

            "<td>" + list[i].date + "</td>" +

            "<td>" + list[i].workDone + "</td>" +

            "<td>" + list[i].parts + "</td>" +

            "<td>৳" + Number(list[i].cost).toFixed(2) + "</td>" +

            "<td>" +

            "<a href='#' class='edit-link' data-index='" + Index + "'>Edit</a>" +

            "</td>" +

            "</tr>";

    }


    if (list.length === 0) {

        Empty.innerHTML = "No Service Records Found.";

    }

    else {

        Empty.innerHTML = "";

    }

}




function addServiceRecord() {


    let Bus = document.getElementById("bus").value;

    let Date = document.getElementById("serviceDate").value;

    let Cost = document.getElementById("cost").value;

    let Work = document.getElementById("workDone").value.trim();



    
    let Parts = [];


    for (let i = 1; i <= 3; i++) {

        let Part = document.getElementsByName("part" + i)[0].value;

        let Quantity = document.getElementsByName("quantity" + i)[0].value;


        if (Part !== "") {

            if (Quantity === "" || Number(Quantity) <= 0) {

                alert("Please enter a valid quantity for " + Part);

                return;

            }


            Parts.push(Part + " x" + Quantity);

        }

        else if (Quantity !== "") {

            alert("Please select a part for the entered quantity.");

            return;

        }

    }



    
    let NewService = {

        bus: Bus,

        date: Date,

        workDone: Work,

        parts: Parts.length > 0 ? Parts.join(", ") : "No parts",

        cost: Number(Cost)

    };



    
    if (validateService(NewService) === false) {

        alert("Please enter all required information.");

        return;

    }



    
    serviceList.push(NewService);


    showServiceHistory();


    
    document.getElementById("serviceForm").reset();


    alert("Service Record Added Successfully!");

}




function searchServiceHistory() {


    let Search = document.getElementById("searchService").value.toLowerCase().trim();

    let SearchList = [];


    for (let i = 0; i < serviceList.length; i++) {

        let Bus = serviceList[i].bus.toLowerCase();

        let Work = serviceList[i].workDone.toLowerCase();

        let Parts = serviceList[i].parts.toLowerCase();


        if (

            Bus.includes(Search) ||

            Work.includes(Search) ||

            Parts.includes(Search)

        ) {

            SearchList.push(serviceList[i]);

        }

    }


    showServiceHistory(SearchList);

}




function editServiceRecord(index) {


    let Service = serviceList[index];


    let NewWork = prompt(

        "Enter Updated Work Done:",

        Service.workDone

    );


    if (NewWork === null) {

        return;

    }


    if (NewWork.trim() === "") {

        alert("Work Done cannot be empty.");

        return;

    }



    let NewCost = prompt(

        "Enter Updated Cost:",

        Service.cost

    );


    if (NewCost === null) {

        return;

    }


    if (

        NewCost.trim() === "" ||

        isNaN(NewCost) ||

        Number(NewCost) < 0

    ) {

        alert("Please enter a valid cost.");

        return;

    }



    
    Service.workDone = NewWork.trim();

    Service.cost = Number(NewCost);


    showServiceHistory();


    alert("Service Record Updated Successfully!");

}




let ServiceTable = document.getElementById("serviceTable");


if (ServiceTable != null) {

    ServiceTable.addEventListener("click", function(event) {


        if (event.target.classList.contains("edit-link")) {


            event.preventDefault();


            let Index = Number(event.target.dataset.index);


            editServiceRecord(Index);


        }

    });

}




let ServiceForm = document.getElementById("serviceForm");


if (ServiceForm != null) {

    ServiceForm.addEventListener("submit", function(event) {


        event.preventDefault();


        addServiceRecord();


    });

}




let SearchButton = document.querySelector(".search-btn");


if (SearchButton != null) {

    SearchButton.addEventListener("click", function() {


        searchServiceHistory();


    });

}




let SearchInput = document.getElementById("searchService");


if (SearchInput != null) {

    SearchInput.addEventListener("input", function() {


        searchServiceHistory();


    });

}




let Signout = document.getElementById("signout");


if (Signout != null) {

    Signout.addEventListener("click", function() {


        let ConfirmSignout = confirm(

            "Are you sure you want to sign out?"

        );


        if (ConfirmSignout === true) {

            alert("You have signed out successfully.");

        }


    });

}




if (document.getElementById("serviceTable") != null) {

    showServiceHistory();

}
