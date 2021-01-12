
/** Information about video. Used for displaying video previews. */
export interface VideoPreviewData {
  /** Video id. */
  id: any;
  /** Title of the video. */
  videoTitle: string;
  /** Title of the channel that published the video. */
  channelTitle: string;
  /** URL to thumbnail image. */
  thumbnail: string;
  /** Number times the video has been watched. */
  viewCount: number;
  /** Video duration in ISO8601 format. */
  duration: string;
  /** Date/time the video was published. */
  publishDate: Date;
}

/** Map of video category ids to category names. */
export type VideoCategories = Record<string, string>


export const MockVideo: VideoPreviewData = {
  id: 0,
  videoTitle: 'Video Title',
  channelTitle: 'Channel Name',
  thumbnail: 'http://via.placeholder.com/210x118',
  viewCount: 56,
  duration: 'PT3M52S',
  publishDate: new Date(0)
}
