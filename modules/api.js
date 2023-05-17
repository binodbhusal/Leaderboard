const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

const fetchLeaderboardData = async () => {
  const res = await fetch(api);
  if (!res.ok) {
    throw Error('Not success');
  }
  const data = await res.json();
  return data;
};

const postUserInput = async (userInput, scoreInput) => {
  const data = { user: userInput, score: scoreInput };
  const res = fetch(api, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw Error('Failed to post input');
  }
  const resData = await res.JSON();
  return resData;
};
export { fetchLeaderboardData, postUserInput };
