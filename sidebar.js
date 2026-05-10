let sidebarSwitch = localStorage.getItem("sidebarSwitch");
let sidebar = document.querySelector(".sidebar-ul-js");
const sidebarButton = document.querySelector("#sidebar-button-On-Off-js");

function sidebarOn() {
    sidebar.classList.add("sidebar-on");
    sidebarButton.classList.add("sidebar-nav-icon--button-on");
    localStorage.setItem("sidebarSwitch", "on");
}
function sidebarOff() {
    sidebar.classList.remove("sidebar-on");
    sidebarButton.classList.remove("sidebar-nav-icon--button-on");
    localStorage.setItem("sidebarSwitch", null);
}

if (sidebarSwitch === "on") {
    sidebarOn();
}

sidebarButton.addEventListener("click", () =>{
    sidebarSwitch = localStorage.getItem("sidebarSwitch");
    if (sidebarSwitch !== "on"){
        sidebarOn();
    }else{
        sidebarOff();
    }
});
