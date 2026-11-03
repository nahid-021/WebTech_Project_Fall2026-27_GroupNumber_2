function collect_data()
{
    let r  = validRoute();
    let t  = validTerminal();
    let ti = validTime();
    let s  = validService();
    let b  = validBus();
    let d  = validDriver();
    let c  = validConductor();

    let Result = document.getElementById("Result");

    if (r && t && ti && s && b && d && c)
    {
        let route = document.getElementById("Route").value;
        let terminal = selectedValue("Terminal");
        let time = document.getElementById("Time").value;
        let bus = document.getElementById("Bus").value;
        let driver = document.getElementById("Driver").value;
        let conductor = document.getElementById("Conductor").value;

        Result.innerHTML = "Assigned " + bus + " to the " + route + " departure from " + terminal + " at " + time + ". Driver: " + driver + ", Conductor: " + conductor + ".";
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

function validTerminal()
{
    let terminal = selectedValue("Terminal");
    let Error = document.getElementById("TerminalError");
    if (terminal == "")
    {
        Error.innerHTML = "* Please select the departing terminal";
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

function validBus()
{
    let bus = document.getElementById("Bus").value;
    let service = selectedValue("Service");
    let Error = document.getElementById("BusError");
    let isNonAC = bus.indexOf("Non-AC") != -1;

    if (bus == "")
    {
        Error.innerHTML = "* Please select a bus";
        return false;
    }
    else if (service == "AC" && isNonAC)
    {
        Error.innerHTML = "* This bus is Non-AC. Choose an AC bus or change the service type";
        return false;
    }
    else if (service == "Non-AC" && !isNonAC)
    {
        Error.innerHTML = "* This bus is AC. Choose a Non-AC bus or change the service type";
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
