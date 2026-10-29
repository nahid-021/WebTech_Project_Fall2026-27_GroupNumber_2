
let buses = [
    { name: "Green Line Paribahan", type: "AC", price: 1200 },
    { name: "Hanif Enterprise", type: "Non-AC", price: 650 },
    { name: "Shohagh Paribahan", type: "AC", price: 1000 },
    { name: "Shyamoli Paribahan", type: "Non-AC", price: 750 }
];

function filterBuses()
{
    let busType = "";

    if (document.getElementById("all").checked)
    {
        busType = "all";
    }
    else if (document.getElementById("ac").checked)
    {
        busType = "AC";
    }
    else if (document.getElementById("nonac").checked)
    {
        busType = "Non-AC";
    }

    let filteredBuses = [];

    for (let i = 0; i < buses.length; i++)
    {
        if (busType == "all" || buses[i].type == busType)
        {
            filteredBuses.push(buses[i]);
        }
    }

    let busList = document.getElementById("busList");

    busList.innerHTML = "";

    for (let i = 0; i < filteredBuses.length; i++)
    {
        busList.innerHTML +=
            "<div class='bus-card'>" +
                "<div class='bus-info'>" +
                    "<h4>" + filteredBuses[i].name + "</h4>" +
                    "<p>Bus Type: " + filteredBuses[i].type + "</p>" +
                    "<p>Ticket Price: ৳" + filteredBuses[i].price + "</p>" +
                "</div>" +
                "<input type='button' class='select-button' value='Select' " +
                "onclick='selectBus(" + i + ")'>" +
            "</div>";
    }

    if (filteredBuses.length == 0)
    {
        busList.innerHTML = "<p>No buses available.</p>";
    }
}

function selectBus(index)
{
    // The next page will be linked here later.
    alert("Bus selected: " + buses[index].name);
}

filterBuses();