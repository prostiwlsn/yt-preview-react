import React, { useState } from 'react';
import { downloadImage } from './downloadImage';
import { forceDownload } from './forceDownload';

function Image({image}, {key}) {    
    //<img src={image.url} className="object-contain w-full h-full hover:border-2 hover:border-gatoroboto-100"></img>
    //<div style={{backgroundImage: `url("`+image.url+`")`}} className="w-48 h-36">{image.height}</div>
    return (
      <>
        <img src={image.url} className="object-contain w-full h-full"></img>
        <div className="absolute top-0 left-0 w-full h-full text-transparent hover:text-gatoroboto-100 hover:bg-gatoroboto-100 hover:bg-opacity-50 transition-all group">
            <div className="group-hover:bg-gatoroboto-50 transition-all w-min rounded-lg pl-1 pr-1 m-1">{image.width}x{image.height}</div>
        </div>
      </>
    )
}
    
export default Image