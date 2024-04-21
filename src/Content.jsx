import React, { useState } from 'react';
import { GetImages } from './GetImages';

function Content() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    
    return (
      <>
        <div className="h-screen flex items-center">
            <div className="w-full flex justify-center">
                <div className="flex flex-col justify-center items-center lg:w-3/5 w-full p-3">
                    <input value={inputValue} onChange={handleInputChange}  type="text" className="w-2/3 bg-gatoroboto-100 text-gatoroboto-50 pb-1 pt-1 pr-2 pl-2 placeholder:text-gatoroboto-50 rounded-xl" placeholder="Paste in YouTube video link">
                    </input>
                    <button onClick={async () => console.log(await GetImages("Ks-_Mh1QhMc"))} className="w-1/6 bg-gatoroboto-100 text-gatoroboto-50 mt-2 p-3 rounded-3xl hover:bg-gatoroboto-50 hover:text-gatoroboto-100 hover:border-2 hover:border-gatoroboto-100 transition-all">
                        Download images
                    </button>
                </div>
            </div>
        </div>
      </>
    )
}
    
export default Content