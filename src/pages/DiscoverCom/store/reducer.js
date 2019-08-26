import { fromJS } from "immutable";
import { SET_BANNERS } from "./constants";

const defaultState = fromJS({
  banners: null
});

export default (state = defaultState, action) => {
  if (action.type === SET_BANNERS) {
    return state.set("banners", action.data);
  }
  return state;
};
