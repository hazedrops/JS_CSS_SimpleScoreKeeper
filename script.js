const pOneScore = document.getElementById('pOneScore')
const pTwoScore = document.getElementById('pTwoScore')
const targetPtr = document.getElementById('targetPoint')
const playerOne = document.getElementById('playerOne')
const playerTwo = document.getElementById('playerTwo')
const reset = document.getElementById('reset')

let goal = 1
let p1Score = 0
let p2Score = 0
let finished = false

targetPtr.addEventListener('click', () => {
  clearScore()

  finished = false;

  goal = parseInt(targetPtr.value)
})

playerOne.addEventListener('click', () => {
  if (!finished) {
    p1Score++
    updateScore(pOneScore, p1Score)

    if (p1Score === goal) {
      changeScoreColor(pOneScore)
      finished = true
    }
  }
})

playerTwo.addEventListener('click', () => {
  if (!finished) {
    p2Score++
    updateScore(pTwoScore, p2Score)

    if (p2Score === goal) {
      changeScoreColor(pTwoScore)
      finished = true
    }
  }
})

reset.addEventListener('click', () => {
  clearScore()

  finished = false
})

function updateScore(pScore, score) {
  pScore.textContent = score

  if (pScore.id === 'pOneScore') {
    p1Score = score
  } else {
    p2Score = score
  }

  if (p1Score === goal) {
    changeScoreColor(pScore)
    finished = true;
  }

  if (p2Score === goal) {
    changeScoreColor(pScore)
    finished = true
  }
}

function changeScoreColor(pScore) {
  let sibling

  if (pScore.id === 'pOneScore') {
    sibling = pScore.nextElementSibling
    // console.log('nextElem is: ', sibling)
  } else {
    sibling = pScore.previousElementSibling
    // console.log('prevElem is: ', sibling)
  }

  pScore.style.color = 'green'
  sibling.style.color = 'red'
}

function clearScore() {
  pOneScore.textContent = 0
  pTwoScore.textContent = 0

  p1Score = 0
  p2Score = 0

  setColor('black')
}

function setColor(color) {
  pOneScore.style.color = color
  pTwoScore.style.color = color
}

