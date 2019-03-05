const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  // set save button to disabled if user has not entered a name.
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  e.preventDefault(); //prevent redirect to homepage.

  const score = {
    score: finalScore.innerText, // save the final score.
    name: username.value // save the username associated with the score.
  };
  highScores.push(score); // push score into highscores array in local storage
  highScores.sort((a, b) => b.score - a.score); // sort the top 5 scores.
  highScores.splice(MAX_HIGH_SCORES); // delete scores which are not in the top 5.

  localStorage.setItem("highScores", JSON.stringify(highScores)); // save into local storage.
  window.location.assign("/"); // goto homepage.
};