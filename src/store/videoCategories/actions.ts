// TODO Doc
import { VideoCategories } from '../../common/types';

export const VIDEO_CATEGORIES_REQUEST = 'VIDEO_CATEGORIES_REQUEST';
export const VIDEO_CATEGORIES_SUCCESS = 'VIDEO_CATEGORIES_SUCCESS';
export const VIDEO_CATEGORIES_FAILURE = 'MVIDEO_CATEGORIES_FAILURE';

export interface VideoCategoriesRequestAction {
  type: typeof VIDEO_CATEGORIES_REQUEST;
}

interface VideoCategoriesSuccessAction {
  type: typeof VIDEO_CATEGORIES_SUCCESS;
  response: any;
}

interface VideoCategoriesFailureAction {
  type: typeof VIDEO_CATEGORIES_FAILURE;
  response: any;
}

export type VideoCategoryAction = VideoCategoriesRequestAction | VideoCategoriesSuccessAction | VideoCategoriesFailureAction

export function videoCategoriesRequest(): VideoCategoryAction {
  return {
    type: VIDEO_CATEGORIES_REQUEST
  };
}

export function videoCategoriesSuccess(response: VideoCategories): VideoCategoryAction {
  return {
    type: VIDEO_CATEGORIES_SUCCESS,
    response
  };
}

export function videoCategoriesFailed(response: any): VideoCategoryAction {
  return {
    type: VIDEO_CATEGORIES_FAILURE,
    response
  };
}
