import { fetchLeaderboardData, postUserInput } from './api.js';

const updateLeaderboard = async () => {
  const leaderboard = document.getElementById('scoreboard');
  const scores = await fetchLeaderboardData();

  leaderboard.innerHTML = '';
  if (!Array.isArray(scores)) {
    throw new Error('Invalid leaderboard data,Expected an array of scores.');
  }

  scores.slice(0, 100).forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.user}: ${score.score}`;
    leaderboard.appendChild(listItem);
  });
};
const handleSubmit = async (event) => {
  event.preventDefault();
  const userInput = document.getElementById('userInput');
  const userScore = document.getElementById('userScore');
  await postUserInput(userInput.value, userScore.value);
  await updateLeaderboard();
};
export { updateLeaderboard, handleSubmit };