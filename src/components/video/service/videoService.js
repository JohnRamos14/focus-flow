import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const endpoint = "https://www.googleapis.com/youtube/v3/";
const multiVidPlayList = `PLk_a-emwr43aDj5S_mPvfNt_LqQkM2vP6`;
const jazzPlaylist = "PL06diOotXAJJHjvUm7FNNG5a7XUA2_C27";
const coffeeShopPlaylist = "OLAK5uy_k0rMyjPYg95yc9P0sbkMLRt982Yl4MlQ8";
const rockPlaylist = "PLCnZsxXddm5W5wSYpaoML1rSXuwtiHAXy";
const hipHopPlaylist = "PL6fhs6TSspZv0F0YgsG-p7Mn189CU2XKS";
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
    url: `${endpoint}playlistItems?part=snippet&maxResults=6&playlistId=${multiVidPlayList}&key=${API_KEY}`,
    headers: { "Content-Type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

const getJazzPlaylist = () => {
  const config = {
    method: "GET",
    url: `${endpoint}playlistItems?part=snippet&maxResults=6&playlistId=${jazzPlaylist}&key=${API_KEY}`,
    headers: { "Content-Type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};
const getCoffeePlaylist = () => {
  const config = {
    method: "GET",
    url: `${endpoint}playlistItems?part=snippet&maxResults=6&playlistId=${coffeeShopPlaylist}&key=${API_KEY}`,
    headers: { "Content-Type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

const getRockPlaylist = () => {
  const config = {
    method: "GET",
    url: `${endpoint}playlistItems?part=snippet&maxResults=6&playlistId=${rockPlaylist}&key=${API_KEY}`,
    headers: { "Content-Type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

const getHipHoplist = () => {
  const config = {
    method: "GET",
    url: `${endpoint}playlistItems?part=snippet&maxResults=6&playlistId=${hipHopPlaylist}&key=${API_KEY}`,
    headers: { "Content-Type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

export {
  getPlaylist,
  getVideo,
  getJazzPlaylist,
  getCoffeePlaylist,
  getRockPlaylist,
  getHipHoplist,
};
