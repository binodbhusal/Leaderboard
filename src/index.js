import './style.css';

import { updateLeaderboard, handleSubmit } from '../modules/leaderboard.js';

updateLeaderboard();
const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('submit', () => {
  handleSubmit();
  updateLeaderboard();
});