//functions

const iconMouseOver = (icon, tooltip) => {
    tooltip.style.visibility = 'visible';
    switch (icon.id) {
        case 'heart1':
        case 'heart2':
        case 'heart3':
            icon.innerHTML = '<i class="fas fa-heart"></i>';
            break;
        case 'compare1':
        case 'compare2':
        case 'compare3':
            icon.innerHTML = '<i class="fas fa-clone"></i>';
            break;
        case 'search1':
        case 'search2':
        case 'search3':
            icon.innerHTML = '<i class="fas fa-search-dollar"></i>';
            break;
        case 'cart1':
        case 'cart2':
        case 'cart3':
            icon.innerHTML = '<i class="fas fa-cart-plus"></i>';
            break;
    };
};

const iconMouseOut = (icon, tooltip) => {
    tooltip.style.visibility = 'hidden';
    switch (icon.id) {
        case 'heart1':
        case 'heart2':
        case 'heart3':
            icon.innerHTML = '<i class="far fa-heart"></i>';
            break;
        case 'compare1':
        case 'compare2':
        case 'compare3':
            icon.innerHTML = '<i class="far fa-clone"></i>';
            break;
        case 'search1':
        case 'search2':
        case 'search3':
            icon.innerHTML = '<i class="fas fa-search"></i>';
            break;
        case 'cart1':
        case 'cart2':
        case 'cart3':
            icon.innerHTML = '<i class="fas fa-shopping-cart"></i>';
            break;
    };
};

//attempt one

document.getElementById('heart1').onmouseover = iconMouseOver(document.getElementById('heart1'), document.getElementById('heart1_tooltip'));
document.getElementById('heart2').onmouseover = iconMouseOver(document.getElementById('heart2'), document.getElementById('heart2_tooltip'));
document.getElementById('heart3').onmouseover = iconMouseOver(document.getElementById('heart3'), document.getElementById('heart3_tooltip'));
document.getElementById('compare1').onmouseover = iconMouseOver(document.getElementById('compare1'), document.getElementById('compare1_tooltip'));
document.getElementById('compare2').onmouseover = iconMouseOver(document.getElementById('compare2'), document.getElementById('compare2_tooltip'));
document.getElementById('compare3').onmouseover = iconMouseOver(document.getElementById('compare3'), document.getElementById('compare3_tooltip'));
document.getElementById('search1').onmouseover = iconMouseOver(document.getElementById('search1'), document.getElementById('search1_tooltip'));
document.getElementById('search2').onmouseover = iconMouseOver(document.getElementById('search2'), document.getElementById('search2_tooltip'));
document.getElementById('search3').onmouseover = iconMouseOver(document.getElementById('search3'), document.getElementById('search3_tooltip'));
document.getElementById('cart1').onmouseover = iconMouseOver(document.getElementById('cart1'), document.getElementById('cart1_tooltip'));
document.getElementById('cart2').onmouseover = iconMouseOver(document.getElementById('cart2'), document.getElementById('cart2_tooltip'));
document.getElementById('cart3').onmouseover = iconMouseOver(document.getElementById('cart3'), document.getElementById('cart3_tooltip'));

document.getElementById('heart1').onmouseout = iconMouseOut(document.getElementById('heart1'), document.getElementById('heart1_tooltip'));
document.getElementById('heart2').onmouseout = iconMouseOut(document.getElementById('heart2'), document.getElementById('heart2_tooltip'));
document.getElementById('heart3').onmouseout = iconMouseOut(document.getElementById('heart3'), document.getElementById('heart3_tooltip'));
document.getElementById('compare1').onmouseout = iconMouseOut(document.getElementById('compare1'), document.getElementById('compare1_tooltip'));
document.getElementById('compare2').onmouseout = iconMouseOut(document.getElementById('compare2'), document.getElementById('compare2_tooltip'));
document.getElementById('compare3').onmouseout = iconMouseOut(document.getElementById('compare3'), document.getElementById('compare3_tooltip'));
document.getElementById('search1').onmouseout = iconMouseOut(document.getElementById('search1'), document.getElementById('search1_tooltip'));
document.getElementById('search2').onmouseout = iconMouseOut(document.getElementById('search2'), document.getElementById('search2_tooltip'));
document.getElementById('search3').onmouseout = iconMouseOut(document.getElementById('search3'), document.getElementById('search3_tooltip'));
document.getElementById('cart1').onmouseout = iconMouseOut(document.getElementById('cart1'), document.getElementById('cart1_tooltip'));
document.getElementById('cart2').onmouseout = iconMouseOut(document.getElementById('cart2'), document.getElementById('cart2_tooltip'));
document.getElementById('cart3').onmouseout = iconMouseOut(document.getElementById('cart3'), document.getElementById('cart3_tooltip'));

//attempt two

document.getElementById('heart1').onmouseover = iconMouseOver(document.getElementById('heart1'), document.getElementById('heart1_tooltip'));
document.getElementById('heart1').onmouseout = iconMouseOut(document.getElementById('heart1'), document.getElementById('heart1_tooltip'));

document.getElementById('heart2').onmouseover = iconMouseOver(document.getElementById('heart2'), document.getElementById('heart2_tooltip'));
document.getElementById('heart2').onmouseout = iconMouseOut(document.getElementById('heart2'), document.getElementById('heart2_tooltip'));

document.getElementById('heart3').onmouseover = iconMouseOver(document.getElementById('heart3'), document.getElementById('heart3_tooltip'));
document.getElementById('heart3').onmouseout = iconMouseOut(document.getElementById('heart3'), document.getElementById('heart3_tooltip'));

document.getElementById('compare1').onmouseover = iconMouseOver(document.getElementById('compare1'), document.getElementById('compare1_tooltip'));
document.getElementById('compare1').onmouseout = iconMouseOut(document.getElementById('compare1'), document.getElementById('compare1_tooltip'));

document.getElementById('compare2').onmouseover = iconMouseOver(document.getElementById('compare2'), document.getElementById('compare2_tooltip'));
document.getElementById('compare2').onmouseout = iconMouseOut(document.getElementById('compare2'), document.getElementById('compare2_tooltip'));

document.getElementById('compare3').onmouseover = iconMouseOver(document.getElementById('compare3'), document.getElementById('compare3_tooltip'));
document.getElementById('compare3').onmouseout = iconMouseOut(document.getElementById('compare3'), document.getElementById('compare3_tooltip'));

document.getElementById('search1').onmouseover = iconMouseOver(document.getElementById('search1'), document.getElementById('search1_tooltip'));
document.getElementById('search1').onmouseout = iconMouseOut(document.getElementById('search1'), document.getElementById('search1_tooltip'));

document.getElementById('search2').onmouseover = iconMouseOver(document.getElementById('search2'), document.getElementById('search2_tooltip'));
document.getElementById('search2').onmouseout = iconMouseOut(document.getElementById('search2'), document.getElementById('search2_tooltip'));

document.getElementById('search3').onmouseover = iconMouseOver(document.getElementById('search3'), document.getElementById('search3_tooltip'));
document.getElementById('search3').onmouseout = iconMouseOut(document.getElementById('search3'), document.getElementById('search3_tooltip'));

document.getElementById('cart1').onmouseover = iconMouseOver(document.getElementById('cart1'), document.getElementById('cart1_tooltip'));
document.getElementById('cart1').onmouseout = iconMouseOut(document.getElementById('cart1'), document.getElementById('cart1_tooltip'));

document.getElementById('cart2').onmouseover = iconMouseOver(document.getElementById('cart2'), document.getElementById('cart2_tooltip'));
document.getElementById('cart2').onmouseout = iconMouseOut(document.getElementById('cart2'), document.getElementById('cart2_tooltip'));

document.getElementById('cart3').onmouseover = iconMouseOver(document.getElementById('cart3'), document.getElementById('cart3_tooltip'));
document.getElementById('cart3').onmouseout = iconMouseOut(document.getElementById('cart3'), document.getElementById('cart3_tooltip'));