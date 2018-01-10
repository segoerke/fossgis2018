toogleNav = function() {
    var nav = document.getElementsByClassName('navigation')[0];
    var navDisplay = nav.style.display;
    if (navDisplay === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}
