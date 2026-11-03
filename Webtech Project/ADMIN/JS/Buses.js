function collect_data()
{
    let b  = validBusNo();
    let m  = validMake();
    let s  = validService();
    let se = validSeats();
    let y  = validYear();
    let f  = validFuel();
    let st = validStatus();
    let d  = validServiceDate();

    let Result = document.getElementById("Result");

    if (b && m && s && se && y && f && st && d)
    {
        let busno = document.getElementById("BusNo").value.trim();
        let make = document.getElementById("Make").value;
        let service = selectedValue("Service");
        let seats = document.getElementById("Seats").value;

        Result.innerHTML = "Bus " + busno + " (" + service + ", " + make + ", " + seats + " seats) added successfully!";
    }
    else
    {
        Result.innerHTML = "";
    }
    return false;
}

function selectedValue(groupName)
{
    let options = document.querySelectorAll('input[name="' + groupName + '"]');
    let chosen = "";

    for (let i = 0; i < options.length; i++)
    {
        if (options[i].checked)
        {
            chosen = options[i].value;
            break;
        }
    }
    return chosen;
}

function validBusNo()
{
    let busno = document.getElementById("BusNo").value.trim();
    let Error = document.getElementById("BusNoError");
    if (busno == "")
    {
        Error.innerHTML = "* Please enter the bus number";
        return false;
    }
    else if (busno.length != 7 || busno.slice(2, 3) != "-")
    {
        Error.innerHTML = "* Bus number must look like DH-1050";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validMake()
{
    let make = document.getElementById("Make").value;
    let Error = document.getElementById("MakeError");
    if (make == "")
    {
        Error.innerHTML = "* Please select the make";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validService()
{
    let service = selectedValue("Service");
    let Error = document.getElementById("ServiceError");
    if (service == "")
    {
        Error.innerHTML = "* Please select AC or Non-AC";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validSeats()
{
    let seats = document.getElementById("Seats").value;
    let Error = document.getElementById("SeatsError");
    if (seats == "")
    {
        Error.innerHTML = "* Please enter the number of seats";
        return false;
    }
    else if (seats < 20 || seats > 60)
    {
        Error.innerHTML = "* Seats must be between 20 and 60";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validYear()
{
    let year = document.getElementById("Year").value;
    let Error = document.getElementById("YearError");
    if (year == "")
    {
        Error.innerHTML = "* Please enter the year of manufacture";
        return false;
    }
    else if (year < 2005 || year > 2026)
    {
        Error.innerHTML = "* Year must be between 2005 and 2026";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validFuel()
{
    let fuel = selectedValue("Fuel");
    let Error = document.getElementById("FuelError");
    if (fuel == "")
    {
        Error.innerHTML = "* Please select the fuel type";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validStatus()
{
    let status = document.getElementById("Status").value;
    let Error = document.getElementById("StatusError");
    if (status == "")
    {
        Error.innerHTML = "* Please select the status";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validServiceDate()
{
    let date = document.getElementById("ServiceDate").value;
    let Error = document.getElementById("ServiceDateError");
    if (date == "")
    {
        Error.innerHTML = "* Please select the last service date";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}
