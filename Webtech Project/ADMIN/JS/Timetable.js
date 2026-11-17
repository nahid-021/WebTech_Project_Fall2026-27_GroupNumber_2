function collect_data()
{
    let route  = validRoute();
    let direction = validDirection();
    let time = validTime();
    let bus  = validBus();
    let driver  = validDriver();
    let conductor  = validConductor();

    let Result = document.getElementById("Result");

    if (route && direction && time && bus && driver && conductor)
    {
        let route = document.getElementById("Route").value;
        let direction = selectedValue("Direction");
        let time = document.getElementById("Time").value;
        let bus = document.getElementById("Bus").value;
        let driver = document.getElementById("Driver").value;
        let conductor = document.getElementById("Conductor").value;
        
        Result.innerHTML = "Assigned " + bus + " to the " + route + " route(" + direction + ") at " + time + ". Driver: " + driver + ", Conductor: " + conductor + ".";    }
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

function validRoute()
{
    let route = document.getElementById("Route").value;
    let Error = document.getElementById("RouteError");
    if (route == "")
    {
        Error.innerHTML = "* Please select a route";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validDirection()
{
    let direction = selectedValue("Direction");
    let Error = document.getElementById("DirectionError");
    if (direction == "")
    {
        Error.innerHTML = "* Please select the direction";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validTime()
{
    let time = document.getElementById("Time").value;
    let Error = document.getElementById("TimeError");
    if (time == "")
    {
        Error.innerHTML = "* Please select the departure time";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
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

function validDriver()
{
    let driver = document.getElementById("Driver").value;
    let Error = document.getElementById("DriverError");
    if (driver == "")
    {
        Error.innerHTML = "* Please select a driver";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validConductor()
{
    let conductor = document.getElementById("Conductor").value;
    let Error = document.getElementById("ConductorError");
    if (conductor == "")
    {
        Error.innerHTML = "* Please select a conductor";
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
    document.getElementById("RouteError").innerHTML = "";
    document.getElementById("DirectionError").innerHTML = "";
    document.getElementById("TimeError").innerHTML = "";
    document.getElementById("BusError").innerHTML = "";
    document.getElementById("DriverError").innerHTML = "";
    document.getElementById("ConductorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}
