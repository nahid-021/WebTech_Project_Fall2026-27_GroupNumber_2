function validateReview()
{
    let operator = document.getElementById("operator").value;
    let comment = document.getElementById("comment").value;

    let operatorError = document.getElementById("operatorError");
    let commentError = document.getElementById("commentError");

    operatorError.textContent = "";
    commentError.textContent = "";

    let valid = true;

    if (operator == "")
    {
        operatorError.textContent = "*Bus operator cannot be empty.";
        valid = false;
    }

    if (comment.trim() == "")
    {
        commentError.textContent = "*Comment cannot be empty.";
        valid = false;
    }

    if (valid == false)
    {
        return false;
    }
    else
    {
        alert("Review submitted successfully!");
        return false;
    }
}