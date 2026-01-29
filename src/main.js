const toggleThemeBtn = document.querySelector("#theme-toggle");
const darkIcon = document.querySelector("#dark-icon");
const lightIcon = document.querySelector("#light-icon");
function updateIcon() {
    if (document.documentElement.classList.contains("dark")) {
        darkIcon.classList.add("hidden")
        lightIcon.classList.remove("hidden")
    }
    else{
        lightIcon.classList.add("hidden")
        darkIcon.classList.remove("hidden")
    }
}
toggleThemeBtn.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark");
    updateIcon()
});

updateIcon()