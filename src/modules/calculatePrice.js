const dot = document.querySelector('#calculate-dot')
const input = document.querySelector("#calculate-input")
const calcGb = document.querySelectorAll('#calc-gb')
const calcCost = document.querySelectorAll('#calc-cost')
const sliderProgress = document.querySelector("#calculate-progress")
const resultProgress = document.querySelector(".c1")

const changeValue = () => {
    const inputVal = (parseFloat(input.value) * 8) / 100;
    const currentGb = inputVal === 0 ? 40 : ((inputVal + 1) * 120) + 40

    sliderProgress.style.width = `${((8.5 * (inputVal + 1)) + (36.5 * (inputVal)))}px`
    resultProgress.style.strokeDasharray = `${(106.25 * (inputVal + 1)) - 35} 1383`

    calcGb.forEach(el => el.innerHTML = `${currentGb} Gb`)
    calcCost.forEach(el => el.innerHTML = `$${(currentGb * 3)}`)

    dot.style.left = `${((8.5  * (inputVal + 1)) + (36.5 * (inputVal)))}px`
}

input.addEventListener('input', () => {
    changeValue()
})