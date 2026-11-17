function collect_data()
{
    let Banking = validBanking();
    let Counter = validCounter();

    if (Banking || Counter)
    {
        window.location.href = "Passenger-MyTicket.html";
    }

    return false;
}

function validBanking()
{
    let Banking = document.getElementById("banking").checked;
    let Error = document.getElementById("paymentError");

    if (Banking == true)
    {
        Error.innerHTML = "";
        return true;
    }
    else
    {
        return false;
    }
}

function validCounter()
{
    let Counter = document.getElementById("counter").checked;
    let Error = document.getElementById("paymentError");

    if (Counter == true)
    {
        Error.innerHTML = "";
        return true;
    }
    else
    {
        Error.innerHTML = "* Please select at least one payment method.";
        return false;
    }
}