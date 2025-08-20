let element = {
    content: '',
    hider: window.document.querySelector('img#hide'),
    more: window.document.querySelector('img#more')
}
function hide(section) {
    if (section == 1) {
        element.content = window.document.querySelector('article#more_about')
    } else if (section == 2) {
        element.content = window.document.querySelector('article#more_skills')
    } else if (section == 3) {
        element.content = window.document.querySelector('article#more_projects')
    }

    if (element.content.style.display == 'none') {
        if (section == 1) {
            element.content.style.display = 'block'
        } else {
            element.content.style.display = 'flex'
        }
        element.hider.style.display = 'block'
        element.more.style.display = 'none'
    } else {
        element.content.style.display = 'none'
        element.hider.style.display = 'none'
        element.more.style.display = 'block'
    }
}