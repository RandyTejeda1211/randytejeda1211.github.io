let btnSidebar = document.getElementById("btnSidebar");
let navbarDefault = document.getElementById("navbar-default");
btnSidebar.addEventListener("click", function(){
   navbarDefault.classList.toggle("hidden");
})

btnSidebar.addEventListener("touchstart", function() {
    navbarDefault.classList.toggle("hidden");
});
