import { ApiActionTypes, YOUTUBE_LIBRARY_LOADED } from "./actions";

export interface YoutubeLibraryState {
  /** True iff the Youtube API library is loaded. */
  loaded: boolean;
}

const initialState: YoutubeLibraryState = {
  loaded: false
};

export default function apiReducer(state: Readonly<YoutubeLibraryState> = initialState, action: ApiActionTypes): YoutubeLibraryState {
  switch (action.type) {
    case YOUTUBE_LIBRARY_LOADED:
      return {
        loaded: true
      };
    default:
      return state;
  }
}
