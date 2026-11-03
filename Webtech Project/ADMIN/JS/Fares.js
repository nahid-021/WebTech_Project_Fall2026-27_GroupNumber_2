function collect_data()
{
    let r  = validRoute();
    let t  = validType();
    let c  = validChange();
    let p  = validPercent();
    let re = validReason();
    let d  = validDate();

    let Result = document.getElementById("Result");

    if (r && t && c && p && re && d)
    {
        let route = document.getElementById("Route").value;
        let type = selectedValue("Type");
        let change = selectedValue("Change");
        let percent = document.getElementById("Percent").value;
        let reason = document.getElementById("Reason").value;
        let date = document.getElementById("EffectiveDate").value;

        let oldFare = currentFare(route, type);
        let newFare;

        if (change == "Increase")
        {
            newFare = Math.round(oldFare + oldFare * percent / 100);
        }
        else
        {
            newFare = Math.round(oldFare - oldFare * percent / 100);
        }

        Result.innerHTML = route + " " + type + " fare changes from Tk " + oldFare + " to Tk " + newFare + " (" + change + " by " + percent + "%) from " + date + ". Reason: " + reason + ".";
    }
    else
    {
        Result.innerHTML = "";
    }
    return false;
}

function currentFare(route, type)
{
    let fare = 0;

    if (route == "Dhaka - Rangpur" && type == "AC")
    {
        fare = 1500;
    }
    else if (route == "Dhaka - Rangpur" && type == "Non-AC")
    {
        fare = 900;
    }
    else if (route == "Dhaka - Bogura" && type == "AC")
    {
        fare = 1000;
    }
    else if (route == "Dhaka - Bogura" && type == "Non-AC")
    {
        fare = 650;
    }
    else if (route == "Dhaka - Sylhet" && type == "AC")
    {
        fare = 1100;
    }
    else if (route == "Dhaka - Sylhet" && type == "Non-AC")
    {
        fare = 700;
    }
    return fare;
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

function validType()
{
    let type = selectedValue("Type");
    let Error = document.getElementById("TypeError");
    if (type == "")
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

function validChange()
{
    let change = selectedValue("Change");
    let Error = document.getElementById("ChangeError");
    if (change == "")
    {
        Error.innerHTML = "* Please select Increase or Decrease";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validPercent()
{
    let percent = document.getElementById("Percent").value;
    let Error = document.getElementById("PercentError");
    if (percent == "")
    {
        Error.innerHTML = "* Please enter the percentage";
        return false;
    }
    else if (percent < 1 || percent > 50)
    {
        Error.innerHTML = "* Percentage must be between 1 and 50";
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
    let Error = document.getElementById("ReasonError");
    if (reason == "")
    {
        Error.innerHTML = "* Please select a reason";
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
    let date = document.getElementById("EffectiveDate").value;
    let Error = document.getElementById("DateError");
    if (date == "")
    {
        Error.innerHTML = "* Please select the effective date";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}
