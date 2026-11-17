
console.log("Manager Spare Parts JS Connected");



let spareParts = [

    {
        name: "hello",
        stock: 0,
        price: 10,
        updated: "2026-09-13 02:26"
    }

];



function validatePart(part) {

    if (part.name === "") {
        return false;
    }

    else if (part.stock < 0) {
        return false;
    }

    else if (part.price < 0) {
        return false;
    }

    else {
        return true;
    }

}




function showParts(searchText = "") {

    let Table = document.getElementById("partsTable");
    let Empty = document.getElementById("emptyMsg");

    Table.innerHTML = "";

    let total = 0;

    for (let i = 0; i < spareParts.length; i++) {

        let part = spareParts[i];

        
        if (!part.name.toLowerCase().includes(searchText.toLowerCase())) {
            continue;
        }

        let stockStatus = "";

        
        if (part.stock <= 5) {

            stockStatus =
                '<span class="low">Low</span>';

        }


        Table.innerHTML +=

            "<tr>" +

            "<td>" + part.name + "</td>" +

            "<td>" +
            part.stock + " " + stockStatus +
            "</td>" +

            "<td>৳" +
            Number(part.price).toFixed(2) +
            "</td>" +

            "<td>" +
            part.updated +
            "</td>" +

            "<td>" +

            '<button class="edit-btn" onclick="editPart(' + i + ')">Edit</button>' +

            '<button class="delete-btn" onclick="deletePart(' + i + ')">Delete</button>' +

            "</td>" +

            "</tr>";

        total++;

    }


    
    if (total === 0) {

        Empty.innerHTML = "No spare parts found.";

    }

    else {

        Empty.innerHTML = "";

    }

}




function addPart(event) {

    event.preventDefault();

    let Name = document.getElementById("partName").value.trim();

    let Stock = Number(document.getElementById("stock").value);

    let Price = Number(document.getElementById("price").value);


    let newPart = {

        name: Name,
        stock: Stock,
        price: Price,
        updated: new Date().toLocaleString()

    };


    
    if (!validatePart(newPart)) {

        alert("Please enter valid spare part information.");

        return;

    }


    
    spareParts.push(newPart);


    
    showParts();


    
    document.getElementById("partForm").reset();

    document.getElementById("stock").value = 0;

    document.getElementById("price").value = 0;

    alert("Spare part added successfully.");

}




function editPart(index) {

    let Name = prompt(
        "Enter new part name:",
        spareParts[index].name
    );

    if (Name === null) {
        return;
    }

    Name = Name.trim();

    if (Name === "") {
        alert("Part name cannot be empty.");
        return;
    }


    let Stock = prompt(
        "Enter new stock quantity:",
        spareParts[index].stock
    );

    if (Stock === null) {
        return;
    }

    let Price = prompt(
        "Enter new unit price:",
        spareParts[index].price
    );

    if (Price === null) {
        return;
    }


    Stock = Number(Stock);

    Price = Number(Price);


    if (
        Stock < 0 ||
        Price < 0 ||
        !Number.isFinite(Stock) ||
        !Number.isInteger(Stock) ||
        !Number.isFinite(Price)
    ) {

        alert("Please enter valid stock and price.");

        return;

    }


    spareParts[index].name = Name;

    spareParts[index].stock = Stock;

    spareParts[index].price = Price;

    spareParts[index].updated = new Date().toLocaleString();


    showParts();

    alert("Spare part updated successfully.");

}




function deletePart(index) {

    let confirmDelete = confirm(
        "Are you sure you want to delete this spare part?"
    );


    if (confirmDelete) {

        spareParts.splice(index, 1);

        showParts();

        alert("Spare part deleted successfully.");

    }

}




function searchParts() {

    let Search = document.getElementById("searchPart").value.trim();

    showParts(Search);

}




document.getElementById("partForm").addEventListener(
    "submit",
    addPart
);



document.getElementById("searchBtn").addEventListener(
    "click",
    searchParts
);



document.getElementById("searchPart").addEventListener(
    "keyup",
    searchParts
);



document.getElementById("signout").addEventListener(
    "click",
    function () {

        alert("You have signed out.");

    }
);



showParts();
