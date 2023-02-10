import React from 'react';

const WebPimg = ({src, alt, webpsrc='', mediaType = 'image/webp'}) => {
  return (
    <picture>
      <source srcSet={webpsrc} type={mediaType} />
      <img src={src} alt={alt} />
    </picture>
  );
};

export default WebPimg;