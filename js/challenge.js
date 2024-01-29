const counterEle = document.getElementById('counter')
let count = 0
let isPaused = false

function updateCounter() {
    if (!isPaused) {
    count++
    counterEle.innerText = count
    }
}

setInterval(updateCounter, 1000)

// Button Event Listeners
const minusBtn = document.getElementById('minus')
minusBtn.addEventListener('click', decrementCounter)

const plusBtn = document.getElementById('plus')
plusBtn.addEventListener('click', incrementCounter)

const likeBtn = document.getElementById('heart')
likeBtn.addEventListener('click', handleLike)

const pauseBtn = document.getElementById('pause')
pauseBtn.addEventListener('click', pauseCounter)

const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', handleSubmit)

// Counter Manipulation Functions

function decrementCounter(e) {
    count--
    counterEle.innerText = count
}

function incrementCounter(e) {
    count++
    counterEle.innerText = count
}

function pauseCounter(e) {  
    isPaused = true
    pauseBtn.innerText = 'resume'
    pauseBtn.removeEventListener('click', pauseCounter)
    pauseBtn.addEventListener('click', resumeCounter)
    minusBtn.disabled = true
    plusBtn.disabled = true
    likeBtn.disabled = true
}

function resumeCounter(e) {
    isPaused = false
    pauseBtn.innerText = 'pause'
    pauseBtn.removeEventListener('click', resumeCounter)
    pauseBtn.addEventListener('click', pauseCounter)
    minusBtn.disabled = false
    plusBtn.disabled = false
    likeBtn.disabled = false
}

// Like a number function
const likeCounts = {}

function handleLike(e) {
    const currentCount = count
    likeCounts[currentCount] = (likeCounts[currentCount] || 0) + 1

    const numLikeList = document.querySelector('ul.likes')
    const newlyLikedNum = document.createElement('li')

    newlyLikedNum.textContent = `Number ${currentCount} has ${likeCounts[currentCount]} like${likeCounts[currentCount] !== 1 ? 's' : ''}!`
    numLikeList.appendChild(newlyLikedNum)
}

function handleSubmit(e) {
    e.preventDefault()
    const cmntForm = document.getElementById('comment-form')
    const newCmntText = document.getElementById('comment-input')
    const newCmnt = document.createElement('p')

    newCmnt.textContent = newCmntText.value
    cmntForm.appendChild(newCmnt)
    document.getElementById('comment-input').value = ''
}