var elements = {
    menu: window.document.querySelector('img#menu'),
    close: window.document.querySelector('img#close'),
    nav: window.document.querySelector('nav'),
    item:window.document.querySelector('div#itens')
}
function menu() {
    if (elements.menu.style.display == 'block') {
        elements.nav.style.display = 'flex'
        elements.menu.style.display = 'none'
        elements.close.style.display = 'block'
    } else {
        elements.nav.style.display = 'none'
        elements.menu.style.display = 'block'
        elements.close.style.display = 'none'
    }
}
function out() {
    if(elements.nav.style.display = 'flex') {
        elements.nav.style.display = 'none'
        elements.menu.style.display = 'block'
        elements.close.style.display = 'none'
    }
}