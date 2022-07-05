const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () =>  {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// Hide switch style on scroll

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// Theme choose

const alternStyles = document.querySelectorAll(".altern-style");
function setActiveStyle(color)
{
    alternStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

// Light and Dark

const DayNight = document.querySelector(".day-night");
DayNight.addEventListener("click", () => {
    DayNight.querySelector("i").classList.toggle("fa-sun");
    DayNight.querySelector("i").classList.add("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load"), () => {
    if(document.body.classList.contains("dark"))
    {
        DayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        DayNight.querySelector("i").classList.add("fa-moon");
    }
}