function collect_data()
{
    let Operator = validOperator();
    let Comment = validComment();

    if (Operator && Comment)
    {
        alert("Review submitted successfully!");
    }

    return false;
}

function validOperator()
{
    let Operator = document.getElementById("operator").value;
    let Error = document.getElementById("operatorError");

    if (Operator == "")
    {
        Error.innerHTML = "* Please Select a Bus Operator";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validComment()
{
    let Comment = document.getElementById("comment").value;
    let Error = document.getElementById("commentError");

    if (Comment.trim() == "")
    {
        Error.innerHTML = "* Please Enter Your Comment";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}