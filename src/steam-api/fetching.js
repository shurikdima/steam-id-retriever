// needed for CORS to work without any configuration
const PROXY = 'https://cors-anywhere.herokuapp.com/';

async function fetchSteamLevel(key, steamId) {
  const path = `https://api.steampowered.com/IPlayerService/GetSteamLevel/v1?key=${key}&steamid=${steamId}`;
  const responseJSON = await fetch(`${PROXY}${path}`).then(response => response.json());
  return responseJSON.response;
}

async function fetchSteamUser(key, steamId) {
  const path = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${steamId}`;
  const responseJSON = await fetch(`${PROXY}${path}`).then(response => response.json());
  return responseJSON.response.players[0];
}

export { fetchSteamLevel, fetchSteamUser };
