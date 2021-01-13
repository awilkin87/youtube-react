import { combineReducers } from 'redux';
import videoCategories from './VideoCategories/reducers';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  videoCategories
});

export default rootReducer;

export function selectVideoCategories(state: RootState) {
  return state.videoCategories;
}

export function selectVideoCategory(state: RootState, id: string): string | undefined {
  return state.videoCategories[id];
}
