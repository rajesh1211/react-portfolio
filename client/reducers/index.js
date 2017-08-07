import {combineReducers} from 'redux';
import SkillsReducer from './reducer-skills';
import ProjectsReducer from './reducer-projects';
import PopupReducer from './reducer-popup';



/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  skills: SkillsReducer,
  projects: ProjectsReducer,
  popup: PopupReducer
});

export default allReducers