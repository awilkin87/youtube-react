import { VideoCategories } from '../../common/types';
import { getYoutubClient } from './load-client';

interface ValidCategorySnippet extends gapi.client.youtube.VideoCategorySnippet {
  title: NonNullable<gapi.client.youtube.VideoCategorySnippet['title']>
}

type ApiVideoCategory = gapi.client.youtube.VideoCategory;

interface ValidCategory extends ApiVideoCategory {
  id: NonNullable<ApiVideoCategory['id']>;
  snippet: ValidCategorySnippet;
}

/** 
 * Fetch available video categories.
 */
export async function fetchCategories(): Promise<VideoCategories> {
  const client = await getYoutubClient();

  const response = await client.videoCategories.list({
    part: 'snippet',
    regionCode: 'US',
  });

  return mapToVideoCategories(response.result);
}

function isValid(item: ApiVideoCategory): item is ValidCategory {
  if (item.id && item.snippet?.title) {
    return true;
  }
  console.warn('Skipping video category with missing data');
  return false;
}

function mapToVideoCategories(response: gapi.client.youtube.VideoCategoryListResponse): VideoCategories {
  if (!response.items) {
    console.error('No video categories returned');
    return {};
  }

  const initAccumlator: VideoCategories = {};
  return response.items
    .filter(isValid)
    .reduce((accumulator, currentValue) => {
      accumulator[currentValue.id] = currentValue.snippet.title;
      return accumulator;
    }, initAccumlator);
}
