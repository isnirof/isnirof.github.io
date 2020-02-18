'use strict'

const soils = document.querySelectorAll('.soil')
const moles = document.querySelectorAll('.mole')
const totalScore = document.querySelector('.score')
const sound = document.querySelector('#sound')

let previousRandom
let finished
let score

function randomSoil(soils) {
    const currentRandom = Math.floor(Math.random() * soils.length)
    if (currentRandom == previousRandom) {
        randomSoil(soils)
    }
    previousRandom = currentRandom
    return soils[currentRandom]
}

function randomTimeShow(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function showMole() {
    const showRandom = randomSoil(soils)
    showRandom.classList.add('show')
    const timeShow = randomTimeShow(400, 800)
    setTimeout(() => {
        showRandom.classList.remove('show')
        if (!finished) {
            showMole()
        }
    }, timeShow)
}
function whack() {
    score++
    this.parentNode.classList.remove('show')
    sound.play()
    totalScore.textContent = score
}

function play() {
    finished = false
    score = 0
    totalScore.textContent = 0
    showMole()

    setTimeout(() => {
        finished = true
    }, 10000)
}

moles.forEach(mole => {
    mole.addEventListener('click', whack)
})