const icon_menu = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu')

icon_menu.addEventListener('click', () => {
    menu.classList.toggle('menu_move')
})