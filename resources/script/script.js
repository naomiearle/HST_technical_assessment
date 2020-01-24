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