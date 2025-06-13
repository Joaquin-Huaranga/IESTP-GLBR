import React, { useState } from "react";

export const LiteYouTubeEmbed = ({ videoId, title }) => {
  const [isIframeLoaded, setIframeLoaded] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="relative w-full overflow-hidden rounded-md aspect-video bg-black cursor-pointer"
      onClick={() => setIframeLoaded(true)}
    >
      {!isIframeLoaded ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 hover:bg-black/40 transition">
          <img
            src={thumbnail}
            alt={`Miniatura de ${title}`}
            className="absolute w-full h-full object-cover"
            loading="lazy"
          />
          <svg
            className="w-16 h-16 text-white z-10"
            fill="currentColor"
            viewBox="0 0 84 84"
          >
            <circle cx="42" cy="42" r="42" fill="rgba(0,0,0,0.6)" />
            <polygon fill="white" points="33,26 60,42 33,58" />
          </svg>
        </div>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};
