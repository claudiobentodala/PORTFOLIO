let element = {
    content: window.document.querySelector('article#more_content'),
    hider: window.document.querySelector('img#hide'),
    more: window.document.querySelector('img#more')
}
function hide() {
    if (element.content.style.display == 'none') {
        element.content.style.display = 'block'
        element.hider.style.display = 'block'
        element.more.style.display = 'none'
    } else {
        element.content.style.display = 'none'
        element.hider.style.display = 'none'
        element.more.style.display = 'block'
    }
}