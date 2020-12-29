/** Indicates that the Youtube Javascript library is finished loading. */
export const YOUTUBE_LIBRARY_LOADED = 'YOUTUBE_LIBRARY_LOADED';

/** Indicates that the Youtube Javascript library is finished loading. */
interface YoutubeLibraryLoadedAction {
  type: typeof YOUTUBE_LIBRARY_LOADED;
}

export type ApiActionTypes = YoutubeLibraryLoadedAction;

export function youtubeLibraryLoaded(): ApiActionTypes {
  return {
    type: YOUTUBE_LIBRARY_LOADED
  };
}
