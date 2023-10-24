//  toggle-menu 

let toggle_menu = document.querySelector("header nav .toggle-menu") ; 
let icon = document.querySelector("header nav .toggle-menu i") ; 
let list = document.querySelector("header nav ul ") ; 


toggle_menu.addEventListener("click" , function () {
    list.classList.toggle("return-list") ; 
    icon.classList.toggle("fa-close") ; 
})  ; 

