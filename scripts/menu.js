var element = {
    menu: window.document.querySelector('img#menu'),
    close: window.document.querySelector('img#close'),
    nav: window.document.querySelector('nav'),
    item:window.document.querySelector('div#itens')
}
function menu() {
    if (element.menu.style.display == 'block') {
        element.nav.style.display = 'flex'
        element.menu.style.display = 'none'
        element.close.style.display = 'block'
    } else {
        element.nav.style.display = 'none'
        element.menu.style.display = 'block'
        element.close.style.display = 'none'
    }
}
function out() {
    if(element.nav.style.display = 'flex') {
        element.nav.style.display = 'none'
        element.menu.style.display = 'block'
        element.close.style.display = 'none'
    }
}