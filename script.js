// You can add interactivity here, such as adding to cart or showing more details
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', function() {
            alert(`You clicked on: ${this.querySelector('h3').innerText}`);
        });
    });
});
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});