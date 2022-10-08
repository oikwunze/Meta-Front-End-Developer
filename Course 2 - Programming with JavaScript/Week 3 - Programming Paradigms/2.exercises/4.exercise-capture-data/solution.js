var h1 = document.querySelector('h1');
var arr = ['Example Domain', 'First Click', 'Second Click', 'Third Click'];

function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
    }
}

h1.addEventListener('click', handleClicks);