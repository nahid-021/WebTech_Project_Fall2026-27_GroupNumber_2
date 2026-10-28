function validateSearch()
{
    let From = document.getElementById("from").value.trim();
    let To = document.getElementById("to").value.trim();
    let Date = document.getElementById("date").value;

    let FromError = document.getElementById("fromError");
    let ToError = document.getElementById("toError");
    let DateError = document.getElementById("dateError");

    FromError.innerHTML = "";
    ToError.innerHTML = "";
    DateError.innerHTML = "";

    let valid = true;

    if(From == "")
    {
        FromError.innerHTML = "* You can't keep this field empty";
        valid = false;
    }

    if(To == "")
    {
        ToError.innerHTML = "* You can't keep this field empty";
        valid = false;
    }

    if(Date == "")
    {
        DateError.innerHTML = "* You can't keep this field empty";
        valid = false;
    }

    return valid;
}