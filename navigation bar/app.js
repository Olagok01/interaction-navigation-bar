const menuOpen = document.querySelector(".open-btn");
const menuClose = document.querySelector(".close-btn");
const navMenu = document.querySelectorAll(".nav-item")

const sidebar = document.querySelector(".nav")
menuOpen.addEventListener('click', ()=>{
    //console.log("a good boy")
    sidebar.classList.add("open")
})

menuClose.addEventListener('click', ()=>{
    sidebar.classList.remove("open")
})

navMenu.forEach((items)=>{
    items.addEventListener('click', (e)=>{
    const dropDown = items.querySelector(".dropdown");
    const icon = items.querySelector(".icon img")
    //console.log(icon)
    //console.log(dropDown)
    dropDown.classList.toggle("open")
    icon.style.transform = dropDown.classList.contains("open") ? 'rotate(180deg)' : 'rotate(0deg)';

    })
})