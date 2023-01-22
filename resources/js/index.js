window.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("toggle").addEventListener("click",()=>{
    const sideBar = document.getElementsByClassName("sidebar")[0];
    sideBar.classList.toggle("sidebar-hidden");
  })
})