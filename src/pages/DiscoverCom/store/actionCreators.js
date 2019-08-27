import {
  SET_BANNERS,
  SET_PERSONALLIST,
  SET_ALBUMLIST,
  SET_SINGERLIST
} from "./constants";
import axios from "@/axios";

export const set_banners = () => {
  return dispatch => {
    axios
      .get("/api/banner?type=0")
      .then(res =>
        dispatch({
          type: SET_BANNERS,
          data: JSON.parse(res).banners
        })
      )
      .catch(err => console.log(err));
  };
};

export const set_personallist = () => {
  return dispatch => {
    axios
      .get("/api/personalized?limit=8")
      .then(res =>
        dispatch({
          type: SET_PERSONALLIST,
          data: JSON.parse(res).result
        })
      )
      .catch(err => console.log(err));
  };
};

export const set_albumlist = () => {
  return dispatch => {
    axios
      .get("/api/album/newest")
      .then(res =>
        dispatch({
          type: SET_ALBUMLIST,
          data: JSON.parse(res).albums
        })
      )
      .catch(err => console.log(err));
  };
};

export const set_billlist = (id, type) => {
  return dispatch => {
    axios
      .get("/api/top/list", {
        params: {
          idx: id
        }
      })
      .then(res =>
        dispatch({
          type: type,
          data: JSON.parse(res).playlist
        })
      )
      .catch(err => console.log(err));
  };
};

export const set_singerlist = () => {
  return dispatch => {
    axios
      .get("/api/artist/list?cat=5001&limit=5")
      .then(res =>
        dispatch({
          type: SET_SINGERLIST,
          data: JSON.parse(res).artists
        })
      )
      .catch(err => console.log(err));
  };
};
