const feed = document.getElementById('hungry')
const hungry = document.getElementById('feed')

let count = 0;
let count2 = 0;

const sleep = document.getElementById('sleep')

const sleepInc = document.getElementById('sleeptime')


const play = document.getElementById('play')

const playInc = document.getElementById('playtime')


const age = document.getElementById('ageNum')

let count4 = 0


let count3 = 0;


const newName2 = document.getElementById('petName')
const button = document.getElementById('button')
const newName3 = document.getElementById('anmsyn')

function fun1() {

    newName3.innerHTML = newName2.value

}
button.addEventListener('click', fun1)


hungry.addEventListener('click', function() {
    if (count > 1) { count-- }

})

let interval = setInterval(() => {
    count++
    feed.textContent = count
    if (count > 3 && count < 6) {
        hungry.style.backgroundColor = 'yellow'
        hungry.style.color = 'black'
    }
    if (count >= 6 && count < 9) {
        hungry.style.backgroundColor = 'red'
        hungry.style.color = 'white'
        hungry.style.fontSize = '28px'
    }
    if (count === 10 || count2 === 10 || count3 === 10) {
        clearInterval(interval)
        document.getElementById('anmsyn').textContent = 'GAME OVER'
        document.getElementById('hello').textContent = ""
    }
}, 1300)

sleep.addEventListener('click', function() {
    if (count2 > 1) { count2-- }
})


let interval2 = setInterval(() => {
    count2++
    sleepInc.textContent = count2
    if (count > 3 && count < 6) {
        sleep.style.backgroundColor = 'yellow'
        sleep.style.color = 'black'
    }
    if (count >= 6 && count < 9) {
        sleep.style.backgroundColor = 'red'
        sleep.style.color = 'white'
        sleep.style.fontSize = '28px'
    }
    if (count2 === 10 || count === 10 || count3 === 10) {
        clearInterval(interval2)
        document.getElementById('anmsyn').textContent = 'GAME OVER'
        document.getElementById('hello').textContent = ''
    }
}, 1100)




play.addEventListener('click', function() {
    if (count3 > 1) { count3-- }
})
let interval3 = setInterval(() => {
    count3++
    playInc.textContent = count3
    if (count > 3 && count < 6) {
        play.style.backgroundColor = 'yellow'
        play.style.color = 'black'
    }
    if (count >= 6 && count < 9) {
        play.style.backgroundColor = 'red'
        play.style.color = 'white'
        play.style.fontSize = '28px'
    }
    if (count3 === 10 || count2 === 10 || count === 10) {
        clearInterval(interval3)
        document.getElementById('anmsyn').textContent = 'GAME OVER'
        document.getElementById('hello').textContent = ''
    }
}, 1200)





function ageInc() {
    let interval4 = setInterval(() => {
        count4++
        age.textContent = count4
        if (count === 10 || count2 === 10 || count3 === 10) {
            clearInterval(interval4)
        }

    }, 500);

}

ageInc()
let count5 = 0
const puppyCount = document.getElementById('puppy2')

function puppy() {
    let interval5 = setInterval(() => {
        count5++
        puppyCount.textContent = count5
        if (count === 10 || count2 === 10 || count3 === 10) {
            clearInterval(interval5)
        }

    }, 2500);

}

puppy()