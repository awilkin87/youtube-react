import { useEffect, useState } from "react";
import { VideoPreviewData } from "../../../common/types";
import { fetchPopularVideos } from '../../../services/youtube';
import VideoGrid from "../../../components/VideoGrid/VideoGrid";

export interface RecommendationsProps {
  /** Recommendation category */
  title: string;
  /** Number of videos to recommend */
  videoCount?: number;
}

const Recommendations: React.FC<Readonly<RecommendationsProps>> = function ({ title, videoCount = 12 }) {
  const [videos, setVideos] = useState<VideoPreviewData[]>([]);
  
  useEffect(() => {
    let canceled = false;

    async function fetch() {
      const response = await fetchPopularVideos(videoCount);
      if (!canceled) {
        setVideos(response.videos);
      }
    }

    fetch();

    return () => { canceled = true; };
  }, [videoCount]);

  return (
    <VideoGrid title={title} videos={videos} />
  );
}

export default Recommendations;
