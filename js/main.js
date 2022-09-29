let elBtn = document.querySelector(".js-btn");
let elNav = document.querySelector(".sitenav");

elBtn.addEventListener("click", function(){
    elNav.classList.toggle("sitenav-show");
    document.body.classList.toggle("bodyshow");
    elBtn.classList.toggle("site-header__btn-show")
})