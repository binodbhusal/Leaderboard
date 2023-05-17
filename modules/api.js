const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

const fetchLeaderboardData = async () => {
  const res = await fetch(api);
  if (!res.ok) {
    throw Error('Not success');
  }
  const data = await res.json();
  if (!Array.isArray(data.result)) {
    throw new Error('Invalid leaderboard data. Expected an array of scores.');
  }
  return data.result;
};
const postUserInput = async (userInput, scoreInput) => {
  const data = { user: userInput, score: scoreInput };
  const res = await fetch(api, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
};

export { fetchLeaderboardData, postUserInput };
