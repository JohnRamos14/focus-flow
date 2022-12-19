import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const endpoint = "https://www.googleapis.com/youtube/v3/";
// const playlistId = `PLEYgnlSbXkImU0CBF8TgbuX6oCO9ZRXz5`;
const playlistId = `PLk_a-emwr43aDj5S_mPvfNt_LqQkM2vP6`;
const songId = "8nXqcugV2Y4";

const getVideo = () => {
  const config = {
    method: "GET",
    url: `${endpoint}videos?part=snippet%2CcontentDetails%2Cstatistics&id=${songId}&key=${API_KEY}`,
    headers: { "Content-Type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

const getPlaylist = () => {
  const config = {
    method: "GET",
    url: `${endpoint}playlistItems?part=snippet&maxResults=6&playlistId=${playlistId}&key=${API_KEY}`,
    headers: { "Content-Type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

export { getPlaylist, getVideo };
