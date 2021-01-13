import { VideoCategories } from "../../common/types";
import { VideoCategoryAction, VIDEO_CATEGORIES_SUCCESS } from "./actions";

export default function videoCategories(currentState: VideoCategories = {}, action: VideoCategoryAction) {
  switch (action.type) {
    case VIDEO_CATEGORIES_SUCCESS:
      return {
        ...currentState,
        ...action.response
      } as VideoCategories;
    default:
      return currentState;
  }
}
