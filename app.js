const sliderContents = document.querySelectorAll('.slider-content')
const leftBtn = document.querySelector('button#left-button')
const rightBtn = document.querySelector('button#right-button')

let count = 0

sliderContents.forEach((slide, index) => {
    slide.style.left = `${index * 100}rem`
})

console.log(sliderContents.length)

leftBtn.addEventListener('click', (e) => {
    if (count > 0) {
        count--
    }

    console.log(count)
    sliderContents.forEach((slide, index) => {
        slide.style.left = `${(index - count) * 100}rem`
    })
})

rightBtn.addEventListener('click', (e) => {
    if (count < sliderContents.length - 1) {
        count++
    }

    console.log(count)

    sliderContents.forEach((slide, index) => {
        slide.style.left = `${-(count - index) * 100}rem`
    })
})
