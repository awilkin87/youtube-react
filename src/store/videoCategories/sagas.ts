
import { call, put, takeLeading } from 'redux-saga/effects'
import { fetchCategories } from '../../services/youtube';
import { videoCategoriesFailed, videoCategoriesSuccess, VIDEO_CATEGORIES_REQUEST } from './actions';

function* fetchCategoriesSaga() {
  try {
    const response = yield call(fetchCategories);
    yield put(videoCategoriesSuccess(response));
  } catch (e) {
    yield put(videoCategoriesFailed(e));
  }
}

export function* watchVideoCategories() {
  yield takeLeading(VIDEO_CATEGORIES_REQUEST, fetchCategoriesSaga);
}
