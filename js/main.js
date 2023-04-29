// CART
cart_container = document.getElementById("cart-container");

window.addEventListener("scroll", () => {
    cart_container.style.display = window.pageYOffset > 500 ? 'block' : 'none';
})



// SCROLL TO TOP BUTTON
const scrollToTop = document.getElementById("topIcon");

window.addEventListener('scroll', () => {
    scrollToTop.style.display = window.pageYOffset > 50 ? 'block' : 'none';
});

function scrollUp() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}



// MOBILE NAME
var syron = document.getElementById("name");
window.addEventListener("scroll", () => {
    if(window.innerWidth < 575) {
        if(window.pageYOffset > 90) {
            syron.style.textAlign = "center";
            syron.style.width = "100%";
            syron.style.position = "fixed";
            syron.style.top = "0";
            syron.style.left = "0";
            syron.style.transition = "all 0.5s ease";
            syron.style.padding = "10px 0";
            syron.style.zIndex = "25";
            syron.style.backgroundColor = "#fff";
            syron.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
        } else {
            syron.style.textAlign = "left";
            syron.style.width = "fit-content";
            syron.style.position = "unset";
            syron.style.padding = "unset";
            syron.style.transition = "all 0.5s ease";
            syron.style.backgroundColor = "unset";
            syron.style.boxShadow = "unset";
        }
    }
})