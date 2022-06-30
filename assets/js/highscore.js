var username = document.querySelector('#username')
var saveScoreBtn = document.querySelector('#saveScoreBtn')
var finalScore = document.querySelector('#finalScore')
var mostRecentScore = localStorage.getItem('mostRecentScore')

var highscores = JSON.parse(localStorage.getItem('highscores')) || []

const maxHighScore = 5

finalScore.innerText = mostRecentScore

username.addEventListener('click', () => {
    saveScoreBtn.disbaled = !username.value
});

var saveHighScore = e => {
    e.preventDefault ()

    var score = {
        score: mostRecentScore,
        name: username.value
    }
    highscores.push(score)

    highscores.sort((a,b) => {
        return b.score - a.score
    })

    highscores.splice(5)

    localStorage.setItem('highscores', JSON.stringify(highscores))
    window.location.assign('/')
    console.log(score);
}

var highscoreList = document.querySelector('#highscoreList')
// var highscores = JSON.parse(localStorage.getItem('highscores')) || []

// highscoreList.innerHTML = highscores.map(score => {
//     return `<li class="high-score>${score.name} - ${score.score}</li>`
// }).join('')

var createScoreList = function() {
    var highscores = JSON.parse(localStorage.getItem('highscores'));
    highscores = $("<li>").addClass("high-score").text(score);
    highscoreList.appendChild(highscores);
}

createScoreList();
