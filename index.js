let homeBtnOne = document.getElementById("home-btn-1")
let homeBtnTwo = document.getElementById("home-btn-2")
let homeBtnThree = document.getElementById("home-btn-3")
let homeScoreEl = document.getElementById("home-score")

let guestBtnOne = document.getElementById("guest-btn-1")
let guestBtnTwo = document.getElementById("guest-btn-2")
let guestBtnThree = document.getElementById("guest-btn-3")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function increaseHomeScore1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScore2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScore3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestScore1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScore2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScore3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function newGame() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeScore = 0
    guestScore = 0
}