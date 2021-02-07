let modal;
let hamburgerMenuImg;

const setup = () => {
    modal = document.querySelector(".modal");
    hamburgerMenuImg = document.querySelector(".main-header__nav__hamburger-menu img");
    modal.addEventListener("click",hideModal);
    hamburgerMenuImg.addEventListener("click",showModal);
}

const showModal = () => {
    modal.style.display = "flex";
}

const hideModal = () => {
    modal.style.display = "none";
}
window.addEventListener("load",setup);