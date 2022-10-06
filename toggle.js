// let toogleNavStatus = false;

// let toogleNav = function () {
//   let getSidebar = document.querySelector(".nav-sidebar");
//   let getSidebarUl = document.querySelector(".nav-sidebar ul");
//   let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
// };
// let toogleMenu = function () {
//   let getSidebar = document.querySelector(".nav-sidebar");
//   let getSidebarUl = document.querySelector(".nav-sidebar ul");
//   let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

//   // getSidebarUl.style.visibility = ".visible";
//   // getSidebarUl.style.visibility = ".visible";
//   // getSidebar.style.width = "300px";
//   getSidebar.classList.toggle = ".passive";
//   let arraylength = getSidebarLinks.length;
//   for (let i = 0; index < array.length; i++) {
//     getSidebarLinks[i].style.opacity = "1";
//   }
// };
getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
let getSidebar = document.querySelector(".nav-sidebar");
const toggle = document.querySelector(".toggle-bar");
toggle.addEventListener("click", function () {
  getSidebar.classList.toggle("show-sidebar");

  // getSidebarLinks.classList.toggle(".opacity");
});

/* *
  if (toogleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "300px";

    let arraylength = getSidebarLinks.length;
    for (let i = 0; index < array.length; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    tooggleNavStatus = true;
  } else if (toogleNavStatus === true) {
    getSidebar.style.width = "50px";

    let arraylength = getSidebarLinks.length;
    for (let i = 0; index < array.length; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    tooggleNavStatus = false;
  }
  **/
