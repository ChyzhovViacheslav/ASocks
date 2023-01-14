const container = document.querySelector('._container');
const btn = document.querySelector('.header__burger-ico')
const burger = document.querySelector('.header__nav')

const closeBurgerWidth = (window) => {
    if (window <= 768) {
        closeBurger()
    }
}

const burgerHandler = () => {
    if (!burger.classList.contains('active')) {
        openBurger()
    } else {
        closeBurger()
    }
}

const openBurger = () => {
    burger.classList.add('active')
    btn.classList.add('ico-active')
}

const closeBurger = () => {
    burger.classList.remove('active')
    btn.classList.remove('ico-active')
}

btn.addEventListener('click', (e) => {
    burgerHandler()
})
;
window.addEventListener('resize', (e) => {
    closeBurgerWidth(e.target.innerWidth)
})