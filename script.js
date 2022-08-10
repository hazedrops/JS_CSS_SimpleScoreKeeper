const pOneScore = document.getElementById('pOneScore')
const pTwoScore = document.getElementById('pTwoScore')
const targetPtr = document.getElementById('targetPoint')
const playerOne = document.getElementById('playerOne')
const playerTwo = document.getElementById('playerTwo')
const reset = document.getElementById('reset')

let goal = 1;

targetPtr.addEventListener('click', () => {
  goal = targetPtr.value;
  clearScore();
})

playerOne.addEventListener('click', () => {
  updateScore(pOneScore)
})

playerTwo.addEventListener('click', () => {
  updateScore(pTwoScore)
})

reset.addEventListener('click', () => {
  clearScore();
})

function updateScore(pScore) {
  if (parseInt(pScore.innerHTML) < goal) {
    pScore.innerHTML = parseInt(pScore.innerText) + 1
  }
}

function clearScore() {
  pOneScore.innerHTML = 0
  pTwoScore.innerHTML = 0
}
