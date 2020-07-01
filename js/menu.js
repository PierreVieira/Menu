var menu_getter = document.getElementsByClassName('link-nav')
var menu = {tabelas: menu_getter[0], sobre: menu_getter[1]}
var list_second = document.getElementsByClassName('list-nav-second')
var menu_second = {tabelas: list_second[0], sobre: list_second[1]}
console.log(list_second)

menu.tabelas.addEventListener('click', () => {
    menu_second.tabelas.classList.toggle('hide')
    menu.tabelas.classList.toggle('arrow')
})
menu.sobre.addEventListener('click', () => {
    menu_second.sobre.classList.toggle('hide')
    menu.sobre.classList.toggle('arrow')
})