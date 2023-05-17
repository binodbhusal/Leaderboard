import './style.css';

import { updateLeaderboard, handleSubmit } from '../modules/leaderboard.js';

updateLeaderboard();
const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  await handleSubmit(event);
  await updateLeaderboard();
  form.reset();
});
const refreshBtn = document.getElementById('btnRefresh');
refreshBtn.addEventListener('click', () => {
  window.location.reload();
  updateLeaderboard();
});