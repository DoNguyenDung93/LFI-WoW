var mainTitle = document.querySelector('h1');
mainTitle.textContent = 'Welcome to Looking for Items';

var imageSelector = document.querySelector('img');
imageSelector.onclick = function() {
    var source = imageSelector.getAttribute('src');
    if (source === 'images/wow-logo-medium.png') {
        imageSelector.setAttribute('src', 'images/wow-logo-1.png');
    } else {
        imageSelector.setAttribute('src', 'images/wow-logo-medium.png');
    }
}

