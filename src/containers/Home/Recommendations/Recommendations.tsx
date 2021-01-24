import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { VideoPreviewData } from "../../../common/types";
import { fetchPopularVideos } from '../../../services/youtube';
import { selectVideoCategories } from "../../../store/rootReducer";
import VideoGrid from "../../../components/VideoGrid/VideoGrid";

export interface RecommendationsProps {
  /** Recommendation category id. If undefined recommends most popular videos. */
  categoryId?: string;
  /** Number of videos to recommend */
  videoCount?: number;
}

const Recommendations = function ({ categoryId, videoCount = 12 }: Readonly<RecommendationsProps>) {
  const [videos, setVideos] = useState<VideoPreviewData[]>([]);

  const videoCategories = useSelector(selectVideoCategories);
  const title = categoryId ? videoCategories[categoryId] : 'Trending';
  
  useEffect(() => {
    let canceled = false;

    async function fetch() {
      const response = await fetchPopularVideos(videoCount, categoryId);
      if (!canceled) {
        setVideos(response.videos);
      }
    }

    fetch();

    return () => { canceled = true; };
  }, [videoCount, categoryId]);

  return (
    <VideoGrid title={title} videos={videos} />
  );
}

export default Recommendations;
