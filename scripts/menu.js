let elements = {
    itens: window.document.querySelector('div#itens'),
    menu: window.document.querySelector('img#menu'),
    close: window.document.querySelector('img#close'),
    nav: window.document.querySelector('nav')
}
elements.itens.addEventListener('click', menu)
function menu() {
    elements.nav.classList.toggle('showNav')
}