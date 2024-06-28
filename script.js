const hamburguer = document.getElementsByClassName('hamburguerOpen')[0]
const menu = document.getElementsByTagName('ol')[0]
const overflow = document.getElementsByClassName('overflowMenu')[0]

function openMenu(){
menu.classList.toggle('menuOpen')
hamburguer.classList.toggle('closeMenuIcon')
overflow.classList.toggle('overflowMenuOpen')
}

