function collect_data()
{
    let bus = validBus();
    let status = validStatus();
    let reason = validReason();
    let date = validDate();

    let Result = document.getElementById("Result");

    if (bus && status && reason && date)
    {
        let busno = document.getElementById("Bus").value;
        let newstatus = document.getElementById("Status").value;
        let why = document.getElementById("Reason").value;
        let when = document.getElementById("StatusDate").value;

        Result.innerHTML = busno + " status changed to " + newstatus + " (" + why + ") on " + when + ".";
    }
    else
    {
        Result.innerHTML = "";
    }
    return false;
}

function validBus()
{
    let bus = document.getElementById("Bus").value;
    let Error = document.getElementById("BusError");
    if (bus == "")
    {
        Error.innerHTML = "* Please select a bus";
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
        Error.innerHTML = "* Please select the new status";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validReason()
{
    let reason = document.getElementById("Reason").value;
    let status = document.getElementById("Status").value;
    let Error = document.getElementById("ReasonError");
    if (reason == "")
    {
        Error.innerHTML = "* Please select a reason";
        return false;
    }
    else if (status == "Active" && reason != "Back in service")
    {
        Error.innerHTML = "* An active bus must have the reason: Back in service";
        return false;
    }
    else if (status != "" && status != "Active" && reason == "Back in service")
    {
        Error.innerHTML = "* Choose a reason other than Back in service";
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
    let date = document.getElementById("StatusDate").value;
    let Error = document.getElementById("DateError");
    if (date == "")
    {
        Error.innerHTML = "* Please select the date";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function clear_messages()
{
    document.getElementById("BusError").innerHTML = "";
    document.getElementById("StatusError").innerHTML = "";
    document.getElementById("ReasonError").innerHTML = "";
    document.getElementById("DateError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}