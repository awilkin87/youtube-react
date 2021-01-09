
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
  /** Video duration. */
  duration: string;
  /** Date/time the video was published. */
  publishDate: Date;
}

export const MockVideo: VideoPreviewData = {
  id: 0,
  videoTitle: 'Video Title',
  channelTitle: 'Channel Name',
  thumbnail: 'http://via.placeholder.com/210x118',
  viewCount: 56,
  duration: '3:52',
  publishDate: new Date(0)
}