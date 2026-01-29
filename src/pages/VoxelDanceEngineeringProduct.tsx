import React from 'react';
import { useLocale } from '../contexts/LocaleContext';

const VoxelDanceEngineeringProduct: React.FC = () => {
  const { t } = useLocale();

  // Extract video ID from YouTube URL
  const videoId = '9A38bSK-V4g';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          {/* YouTube Video Embed */}
          <div className="w-full max-w-6xl">
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                title="VoxelDance Engineering"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoxelDanceEngineeringProduct;
