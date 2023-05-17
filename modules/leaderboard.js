import { fetchLeaderboardData, postUserInput } from './api.js';

const updateLeaderboard = async () => {
  const leaderboard = document.getElementById('scoreboard');
  const scores = fetchLeaderboardData();
  if (!scores) {
    throw Error('Failed to fetch leaderboard data');
  }
  leaderboard.innerHTML = '';
  scores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.user}: ${score.score}`;
    leaderboard.appendChild(listItem);
  });
};
const handleSubmit = async (event) => {
  event.preventDefault();
  const userInput = document.getElementById('userInput');
  const userScore = document.getElementById('userScore');
  await postUserInput(userInput, userScore);
  await fetchLeaderboardData();
};
export { updateLeaderboard, handleSubmit };