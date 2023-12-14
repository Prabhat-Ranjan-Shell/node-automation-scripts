window.onload = (event => {
    document.getElementsByTagName('h3')[0].style.color='green'

    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('test.js')
        .then()
        .catch()
    }
});
