function collect_data()
{
    let From = validFrom();
    let To = validTo();
    let Date = validDate();

    if (From && To && Date)
    {
        window.location.href = "Passenger-SearchBus.html";
    }

    return false;
}

function validFrom()
{
    let From = document.getElementById("from").value.trim();
    let Error = document.getElementById("fromError");

    if (From == "")
    {
        Error.innerHTML = "* You can't keep this field empty";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validTo()
{
    let To = document.getElementById("to").value.trim();
    let Error = document.getElementById("toError");

    if (To == "")
    {
        Error.innerHTML = "* You can't keep this field empty";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validDate()
{
    let Date = document.getElementById("date").value;
    let Error = document.getElementById("dateError");

    if (Date == "")
    {
        Error.innerHTML = "* You can't keep this field empty";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}