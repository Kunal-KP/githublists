import {combineReducers} from 'redux';
import StarredReducer from './reducer-starred';


const allReducers = combineReducers({
    starList: StarredReducer

});

export default allReducers;
