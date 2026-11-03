function collect_data()
{
    let t = validTrip();
    let d = validDriver();
    let c = validConductor();

    let Result = document.getElementById("Result");

    if (t && d && c)
    {
        let trip = document.getElementById("Trip").value;
        let driver = document.getElementById("Driver").value;
        let conductor = document.getElementById("Conductor").value;

        Result.innerHTML = "Assigned " + driver + " (driver) and " + conductor + " (conductor) to " + trip + ".";
    }
    else
    {
        Result.innerHTML = "";
    }
    return false;
}

function validTrip()
{
    let trip = document.getElementById("Trip").value;
    let Error = document.getElementById("TripError");
    if (trip == "")
    {
        Error.innerHTML = "* Please select a trip";
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

function approve_app(n, name)
{
    let status = document.getElementById("AppStatus" + n);
    let action = document.getElementById("AppAction" + n);
    let result = document.getElementById("AppResult");

    status.innerHTML = "Approved";
    status.className = "ok";
    action.innerHTML = "Done";
    result.innerHTML = name + "'s application has been approved. Login details will be sent to the applicant.";
}

function reject_app(n, name)
{
    let status = document.getElementById("AppStatus" + n);
    let action = document.getElementById("AppAction" + n);
    let result = document.getElementById("AppResult");

    status.innerHTML = "Rejected";
    status.className = "none";
    action.innerHTML = "Done";
    result.innerHTML = name + "'s application has been rejected.";
}
