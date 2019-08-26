import { combineReducers } from 'redux-immutable';
import DiscoverReducer from '@/pages/DiscoverCom/store/reducer'

const rootReducer = combineReducers({
  discover: DiscoverReducer
});

export default rootReducer;