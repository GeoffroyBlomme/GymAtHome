let modal;
let hamburgerMenuImg;
let backToTop;
const setup = () => {
    modal = document.querySelector(".modal");
    hamburgerMenuImg = document.querySelector(".main-header__nav__hamburger-menu img");
    modal.addEventListener("click",hideModal);
    hamburgerMenuImg.addEventListener("click",showModal);

}

const showModal = () => {
    modal.style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
}

const hideModal = () => {
    modal.style.display = "none";
    document.querySelector("body").style.overflow = "visible";
}
window.addEventListener("load",setup);