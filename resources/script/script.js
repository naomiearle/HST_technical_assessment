//functions for changing image on hover

let ironKettle = document.getElementById('iron_kettle');
let pendantLamp = document.getElementById('pendant_lamp');
let sweeperDustpan = document.getElementById('sweeper_dustpan');

ironKettle.onmouseover = function() {
    ironKettle.src = './resources/images/iron-kettle/iron-kettle-2.jpg';
};

ironKettle.onmouseout = function() {
    ironKettle.src = './resources/images/iron-kettle/iron-kettle.jpg';
};

pendantLamp.onmouseover = function() {
    pendantLamp.src = './resources/images/pendant-lamp/pendant-lamp-2.jpg';
};

pendantLamp.onmouseout = function() {
    pendantLamp.src = './resources/images/pendant-lamp/pendant-lamp.jpg';
};

sweeperDustpan.onmouseover = function() {
    sweeperDustpan.src = './resources/images/sweeper-and-dustpan/sweeper-and-dustpan-2.jpg';
};

sweeperDustpan.onmouseout = function() {
    sweeperDustpan.src = './resources/images/sweeper-and-dustpan/sweeper-and-dustpan.jpg';
};

//icon variables

let heart1 = document.getElementById('heart1')
let compare1 = document.getElementById('compare1');
let search1 = document.getElementById('search1');
let cart1 = document.getElementById('cart1');

let heart2 = document.getElementById('heart2')
let compare2 = document.getElementById('compare2');
let search2 = document.getElementById('search2');
let cart2 = document.getElementById('cart2');

let heart3 = document.getElementById('heart3')
let compare3 = document.getElementById('compare3');
let search3 = document.getElementById('search3');
let cart3 = document.getElementById('cart3');

//heart icon mouse functions

heart1.onmouseover = function() {
    heart1.innerHTML = '<i class="fas fa-heart"></i>';
};

heart1.onmouseout = function() {
    heart1.innerHTML = '<i class="far fa-heart"></i>';
};

heart2.onmouseover = function() {
    heart2.innerHTML = '<i class="fas fa-heart"></i>';
};

heart2.onmouseout = function() {
    heart2.innerHTML = '<i class="far fa-heart"></i>';
};

heart3.onmouseover = function() {
    heart3.innerHTML = '<i class="fas fa-heart"></i>';
};

heart3.onmouseout = function() {
    heart3.innerHTML = '<i class="far fa-heart"></i>';
};

//compare icon mouse functions

compare1.onmouseover = function() {
    compare1.innerHTML = '<i class="fas fa-clone"></i>';
};

compare1.onmouseout = function() {
    compare1.innerHTML = '<i class="far fa-clone"></i>';
};

compare2.onmouseover = function() {
    compare2.innerHTML = '<i class="fas fa-clone"></i>';
};

compare2.onmouseout = function() {
    compare2.innerHTML = '<i class="far fa-clone"></i>';
};

compare3.onmouseover = function() {
    compare3.innerHTML = '<i class="fas fa-clone"></i>';
};

compare3.onmouseout = function() {
    compare3.innerHTML = '<i class="far fa-clone"></i>';
};

//search icon mouse functions

search1.onmouseover = function() {
    search1.innerHTML = '<i class="fas fa-search-dollar"></i>';
};

search1.onmouseout = function() {
    search1.innerHTML = '<i class="fas fa-search"></i>';
};

search2.onmouseover = function() {
    search2.innerHTML = '<i class="fas fa-search-dollar"></i>';
};

search2.onmouseout = function() {
    search2.innerHTML = '<i class="fas fa-search"></i>';
};

search3.onmouseover = function() {
    search3.innerHTML = '<i class="fas fa-search-dollar"></i>';
};

search3.onmouseout = function() {
    search3.innerHTML = '<i class="fas fa-search"></i>';
};

//cart icon change functions

cart1.onmouseover = function() {
    cart1.innerHTML = '<i class="fas fa-cart-plus"></i>';
};

cart1.onmouseout = function() {
    cart1.innerHTML = '<i class="fas fa-shopping-cart"></i>';
};

cart2.onmouseover = function() {
    cart2.innerHTML = '<i class="fas fa-cart-plus"></i>';
};

cart2.onmouseout = function() {
    cart2.innerHTML = '<i class="fas fa-shopping-cart"></i>';
};

cart3.onmouseover = function() {
    cart3.innerHTML = '<i class="fas fa-cart-plus"></i>';
};

cart3.onmouseout = function() {
    cart3.innerHTML = '<i class="fas fa-shopping-cart"></i>';
};