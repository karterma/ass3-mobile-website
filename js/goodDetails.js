var totalSum = 98;
var totalnum = 2;
document.addEventListener('DOMContentLoaded', function () {
    const goodsData = JSON.parse(localStorage.getItem('goods'));
    // Click on the image to toggle the detail image
    var thumbnails = document.querySelectorAll('.thumbnail');
    var fullImage = document.getElementById('full-image');

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
            fullImage.src = this.getAttribute('data-full');
        });
    });
    //Shopping cart modify quantity, remove
    // Gets all the add/subtract buttons and quantity input fields
    const minusBtns = document.querySelectorAll('.decrease');
    const plusBtns = document.querySelectorAll('.increase');
    const quantities = document.querySelectorAll('#quantity');
    // Minus button click event
    minusBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let input = quantities[index];
            if (input.value > 1) {
                input.value = parseInt(input.value) - 1;
                goodsData[index].num -= 1;
                localStorage.setItem('goods', JSON.stringify(goodsData));
            }

        });
    });

    // Plus button click event
    plusBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let input = quantities[index];
            input.value = parseInt(input.value) + 1;            
            goodsData[index].num += 1;
            localStorage.setItem('goods', JSON.stringify(goodsData));
        });
    });    
});
function openCart() {
    const quantities = document.querySelectorAll('#quantity');
    let i = sessionStorage.getItem('goodsid');
    const goodsData = JSON.parse(localStorage.getItem('goods'));
    //New added to shopping cart
    let num=parseInt(quantities[0].value);
    if (goodsData[i].isShow == false) {
        goodsData[i].isShow = true;
        goodsData[i].num = num;
    } else {//Shopping carts already exist and the number increases
        
        goodsData[i].num = goodsData[i].num+num;
    }
    localStorage.setItem('goods', JSON.stringify(goodsData));
    window.location.href = 'ShoppingCart.html'
}