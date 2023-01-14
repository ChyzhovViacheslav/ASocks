const item = document.querySelectorAll('.how__item')
const bg = document.querySelectorAll('.how__item-bg')
const title = document.querySelectorAll('.how__item-title')
const text = document.querySelectorAll('.how__item-text')
const img = document.querySelectorAll('.how__item-img')

const transition = el => el.style.transition = 'all 0.3s ease-in-out';

bg.forEach(el => transition(el))
title.forEach(el => transition(el))
text.forEach(el => transition(el))
item.forEach(el => transition(el))
img.forEach(el => transition(el))

const textHeight = Array.from(text).map(el => el.clientHeight)

const showText = (index) => {
    bg[index].style.opacity = '0'
    item[index].style.backgroundColor = '#7c4eff'
    img[index].style.marginTop = '0px'
    title[index].style.color = '#F9FBFD'
    title[index].style.marginBottom = '0px'
    title[index].style.marginTop = `0px`
    text[index].style.opacity = '1'
}

const hideText = (index) => {
    bg[index].style.opacity = '1'
    item[index].style.backgroundColor = '#F9FBFD'
    img[index].style.marginTop = '65px'
    title[index].style.color = '#202027'
    title[index].style.marginBottom = `${textHeight[index]}px`
    title[index].style.marginTop = `30px`
    text[index].style.opacity = '0'
}

item.forEach((el, i) => el.addEventListener('mouseover', () => showText(i)))
item.forEach((el, i) => el.addEventListener('mouseout', () => hideText(i)))