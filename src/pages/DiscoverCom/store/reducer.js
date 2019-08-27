import { fromJS } from "immutable";
import {
  SET_BANNERS,
  SET_PERSONALLIST,
  SET_ALBUMLIST,
  SET_BILLUPLIST,
  SET_BILLNEWLIST,
  SET_BILLPERSLIST,
  SET_SINGERLIST
} from "./constants";

const defaultState = fromJS({
  banners: null,
  personalList: null,
  albumList: null,
  billUplist: null,
  billNewlist: null,
  billPerslist: null,
  singerlist: null
});

export default (state = defaultState, action) => {
  if (action.type === SET_BANNERS) {
    return state.set("banners", action.data);
  }
  if (action.type === SET_PERSONALLIST) {
    return state.set("personalList", action.data);
  }
  if (action.type === SET_ALBUMLIST) {
    return state.set("albumList", action.data);
  }
  if (action.type === SET_BILLUPLIST) {
    return state.set("billUplist", action.data);
  }
  if (action.type === SET_BILLNEWLIST) {
    return state.set("billNewlist", action.data);
  }
  if (action.type === SET_BILLPERSLIST) {
    return state.set("billPerslist", action.data);
  }
  if (action.type === SET_SINGERLIST) {
    return state.set("singerlist", action.data);
  }
  return state;
};
