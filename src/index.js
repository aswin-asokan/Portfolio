function navControl()
{
    x = document.getElementById("navMob");
    i = document.getElementById("icon");
    if(x.style.width == "0%")
    {
        x.style.width = "50%";
        i.className = "fa-solid fa-x";
    }
    else
    {
        x.style.width = "0%";
        i.className = "fa-solid fa-bars";
    }
}
function closeNav()
{
    x = document.getElementById("navMob");
    i = document.getElementById("icon");
    x.style.width = "0%";
    i.className = "fa-solid fa-bars";
}