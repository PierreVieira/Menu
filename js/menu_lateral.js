const menu_getter = document.getElementsByClassName('link-nav');
const menu_lateral = {tabelas: menu_getter[0], sobre: menu_getter[1]};
const list_second = document.getElementsByClassName('list-nav-second');
const menu_second = {tabelas: list_second[0], sobre: list_second[1]};
console.log(list_second)

menu_lateral.tabelas.addEventListener('click', () => {
    menu_second.tabelas.classList.toggle('hide')
    menu_lateral.tabelas.classList.toggle('arrow')
})
menu_lateral.sobre.addEventListener('click', () => {
    menu_second.sobre.classList.toggle('hide')
    menu_lateral.sobre.classList.toggle('arrow')
})