checkpass = "";


function confirm()
{
    checkpass = document.getElementById("input_password").value;

    if(checkpass === "HMSPass_ebnet")
    {
        window.location = "mainpage.html";
    } 
    else
    {
        document.getElementById("input_password").value = "Incorrect Password, Try Again.";
    }
}

function cafe()
{
    window.location = "cafeteria.html";
}

function backmain()
{
    window.location = "password.html";
}

function backcaf()
{
    window.location = "mainpage.html";
}