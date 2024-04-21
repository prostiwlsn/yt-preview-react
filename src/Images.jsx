import React, { useState } from 'react';

function Images({images}) {
    console.log(images)

    const imageList = images.map(image =>
        <>
            <div class="max-w-32 max-h-18">
                <img src={image.url} className="object-contain w-full h-full"></img>
            </div>
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