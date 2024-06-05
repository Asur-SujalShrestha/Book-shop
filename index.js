window.onload = function(){
    const menu_btn = document.querySelector(".hamburger");
    const mobile_btn = document.querySelector(".mobile-menu");
    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle("is-active");
        mobile_btn.classList.toggle("is-active");
    });
}