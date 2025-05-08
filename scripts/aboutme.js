let content = window.document.querySelector('article#more_content')
let hider = window.document.querySelector('img#hide')
let more = window.document.querySelector('img#more')
function hide() {
    if (content.style.display == 'none') {
        content.style.display = 'block'
        hider.style.display = 'block'
        more.style.display = 'none'
    } else {
        content.style.display = 'none'
        hider.style.display = 'none'
        more.style.display = 'block'
    }
}