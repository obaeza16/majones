const subMenuItem = document.querySelector(".sub-menu-item");
const subMenu = document.querySelector(".sub-menu");
subMenuItem.addEventListener("mouseover", ()=>{
    subMenu.style.display = "block";
});
subMenuItem.addEventListener("mouseout", ()=>{
    subMenu.style.display = "none";
})