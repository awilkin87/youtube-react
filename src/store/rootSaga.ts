import { all, fork } from 'redux-saga/effects';
import { watchVideoCategories } from './VideoCategories/sagas';

export default function* rootSaga() {
  yield all([
    fork(watchVideoCategories)
  ]);
}
