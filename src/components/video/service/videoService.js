import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const endpoint = "https://www.googleapis.com/youtube/v3/playlistItems";
const playlistId = `PL6fhs6TSspZu4nYlvQ_l206FmRaMT_MGh`;

const getPlaylist = () => {
  const config = {
    method: "GET",
    url: `${endpoint}?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`,
    headers: { "Content-Type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

export { getPlaylist };
