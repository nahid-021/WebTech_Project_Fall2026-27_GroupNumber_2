function validatePayment()
{
    let banking = document.getElementById("banking").checked;
    let counter = document.getElementById("counter").checked;
    let paymentError = document.getElementById("paymentError");

    if (banking == false && counter == false)
    {
        paymentError.textContent = "*Please select at least one payment method.";
    }
    else
    {
        paymentError.textContent = "";
        window.location.href = "Passenger-MyTicket.html";
    }
}

