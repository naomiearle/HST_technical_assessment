//title color change

document.getElementById('title').onmouseover = function() {
    document.getElementById('title').style.color = 'red';
};

document.getElementById('title').onmouseout = function() {
    document.getElementById('title').style.color = 'white';
}

//global variables

let ironKettle = document.getElementById('iron_kettle');
let pendantLamp = document.getElementById('pendant_lamp');
let sweeperDustpan = document.getElementById('sweeper_dustpan');

let ironKettleOverlay = document.getElementById('iron_kettle_overlay');
let pendantLampOverlay = document.getElementById('pendant_lamp_overlay');
let sweeperDustpanOverlay = document.getElementById('sweeper_dustpan_overlay');

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

let heart1Tooltip = document.getElementById('heart1_tooltip');
let compare1Tooltip = document.getElementById('compare1_tooltip');
let search1Tooltip = document.getElementById('search1_tooltip');
let cart1Tooltip = document.getElementById('cart1_tooltip');

let heart2Tooltip = document.getElementById('heart2_tooltip');
let compare2Tooltip = document.getElementById('compare2_tooltip');
let search2Tooltip = document.getElementById('search2_tooltip');
let cart2Tooltip = document.getElementById('cart2_tooltip');

let heart3Tooltip = document.getElementById('heart3_tooltip');
let compare3Tooltip = document.getElementById('compare3_tooltip');
let search3Tooltip = document.getElementById('search3_tooltip');
let cart3Tooltip = document.getElementById('cart3_tooltip');

//Image change events

ironKettle.onmouseover = function() {
    ironKettle.src = './resources/images/iron-kettle/iron-kettle-2.jpg';
    ironKettleOverlay.style.display = 'flex';
};

ironKettle.onmouseout = function() {
    ironKettle.src = './resources/images/iron-kettle/iron-kettle.jpg';
    ironKettleOverlay.style.display = 'none';
};

pendantLamp.onmouseover = function() {
    pendantLamp.src = './resources/images/pendant-lamp/pendant-lamp-2.jpg';
    pendantLampOverlay.style.display = 'flex';
};

pendantLamp.onmouseout = function() {
    pendantLamp.src = './resources/images/pendant-lamp/pendant-lamp.jpg';
    pendantLampOverlay.style.display = 'none';
};

sweeperDustpan.onmouseover = function() {
    sweeperDustpan.src = './resources/images/sweeper-and-dustpan/sweeper-and-dustpan-2.jpg';
    sweeperDustpanOverlay.style.display = 'flex';
};

sweeperDustpan.onmouseout = function() {
    sweeperDustpan.src = './resources/images/sweeper-and-dustpan/sweeper-and-dustpan.jpg';
    sweeperDustpanOverlay.style.display = 'none';
};

//Heart icon events

heart1.onmouseover = function() {
    heart1.innerHTML = '<i class="fas fa-heart"></i>';
    heart1Tooltip.style.visibility = 'visible';
};

heart1.onmouseout = function() {
    heart1.innerHTML = '<i class="far fa-heart"></i>';
    heart1Tooltip.style.visibility = 'hidden';
};

heart2.onmouseover = function() {
    heart2.innerHTML = '<i class="fas fa-heart"></i>';
    heart2Tooltip.style.visibility = 'visible';
};

heart2.onmouseout = function() {
    heart2.innerHTML = '<i class="far fa-heart"></i>';
    heart2Tooltip.style.visibility = 'hidden';
};

heart3.onmouseover = function() {
    heart3.innerHTML = '<i class="fas fa-heart"></i>';
    heart3Tooltip.style.visibility = 'visible';
};

heart3.onmouseout = function() {
    heart3.innerHTML = '<i class="far fa-heart"></i>';
    heart3Tooltip.style.visibility = 'hidden';
};

//Compare icon events

compare1.onmouseover = function() {
    compare1.innerHTML = '<i class="fas fa-clone"></i>';
    compare1Tooltip.style.visibility = 'visible';
};

compare1.onmouseout = function() {
    compare1.innerHTML = '<i class="far fa-clone"></i>';
    compare1Tooltip.style.visibility = 'hidden';
};

compare2.onmouseover = function() {
    compare2.innerHTML = '<i class="fas fa-clone"></i>';
    compare2Tooltip.style.visibility = 'visible';
};

compare2.onmouseout = function() {
    compare2.innerHTML = '<i class="far fa-clone"></i>';
    compare2Tooltip.style.visibility = 'hidden';
};

compare3.onmouseover = function() {
    compare3.innerHTML = '<i class="fas fa-clone"></i>';
    compare3Tooltip.style.visibility = 'visible';
};

compare3.onmouseout = function() {
    compare3.innerHTML = '<i class="far fa-clone"></i>';
    compare3Tooltip.style.visibility = 'hidden';
};

//Search icon events

search1.onmouseover = function() {
    search1.innerHTML = '<i class="fas fa-search-dollar"></i>';
    search1Tooltip.style.visibility = 'visible';
};

search1.onmouseout = function() {
    search1.innerHTML = '<i class="fas fa-search"></i>';
    search1Tooltip.style.visibility = 'hidden';
};

search2.onmouseover = function() {
    search2.innerHTML = '<i class="fas fa-search-dollar"></i>';
    search2Tooltip.style.visibility = 'visible';
};

search2.onmouseout = function() {
    search2.innerHTML = '<i class="fas fa-search"></i>';
    search2Tooltip.style.visibility = 'hidden';
};

search3.onmouseover = function() {
    search3.innerHTML = '<i class="fas fa-search-dollar"></i>';
    search3Tooltip.style.visibility = 'visible';
};

search3.onmouseout = function() {
    search3.innerHTML = '<i class="fas fa-search"></i>';
    search3Tooltip.style.visibility = 'hidden';
};

//Cart icon events

cart1.onmouseover = function() {
    cart1.innerHTML = '<i class="fas fa-cart-plus"></i>';
    cart1Tooltip.style.visibility = 'visible';
};

cart1.onmouseout = function() {
    cart1.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    cart1Tooltip.style.visibility = 'hidden';
};

cart2.onmouseover = function() {
    cart2.innerHTML = '<i class="fas fa-cart-plus"></i>';
    cart2Tooltip.style.visibility = 'visible';
};

cart2.onmouseout = function() {
    cart2.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    cart2Tooltip.style.visibility = 'hidden';
};

cart3.onmouseover = function() {
    cart3.innerHTML = '<i class="fas fa-cart-plus"></i>';
    cart3Tooltip.style.visibility = 'visible';
};

cart3.onmouseout = function() {
    cart3.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    cart3Tooltip.style.visibility = 'hidden';
};