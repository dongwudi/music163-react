import { combineReducers } from 'redux-immutable';
import TopComReducer from '@/components/TopCom/store'

const rootReducer = combineReducers({
  topnav: TopComReducer
});

export default rootReducer;