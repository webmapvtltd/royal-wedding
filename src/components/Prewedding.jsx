import React from 'react';

export default function Prewedding() {
  return (
    <div className="max-w-screen-lg w-full mx-auto my-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Prewedding Video</h2>
      <div className="relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/B159nrR7WJ4?si=gK_zsOJf5p_wicw7"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
