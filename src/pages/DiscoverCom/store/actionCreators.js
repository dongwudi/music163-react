import { SET_BANNERS } from "./constants";
import axios from "@/axios";

export const set_banners = data => {
  return dispatch => {
    axios
      .get("/api/banner", {
        params: {
          type: 0
        }
      })
      .then(res =>
        dispatch({
          type: SET_BANNERS,
          data: JSON.parse(res).banners
        })
      )
      .catch(err => console.log(err));
  };
};
