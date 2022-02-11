let btn=document.querySelector(".menuitems");
let navlist=document.querySelector(".nav-icon");
let show_nav=document.querySelector("ul");
 btn.addEventListener("click",()=>{

btn.classList.toggle("menu-item-animation")
navlist.classList.toggle("show-icon")
show_nav.classList.toggle("show-nav");
 


 })