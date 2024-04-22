import React, { useState } from 'react';
import Image from './Image';
import { downloadImage } from './downloadImage';

function Images({images}) {
  console.log(images)

  const imageList = images.map(image =>
      <>
        <a className="max-w-48 max-h-36 m-2 relative hover:border-2 hover:border-gatoroboto-50" href={image.url}>
          <Image image={image} key={image.url}/>
        </a>
      </>
    );
    
  return (
    <>
      <div className="flex flex-row">
        {imageList}
      </div>
    </>
  )
}
    
export default Images