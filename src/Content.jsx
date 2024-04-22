import React, { useRef, useState } from 'react';
import { GetImages } from './GetImages';
import Images from './Images';

function Content() {
    //переписать с использованием useRef
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const idInput = useRef(null)

    const [images, setValue] = useState([]);
    
    return (
      <>
        <div className="h-screen flex items-center">
            <div className="w-full flex justify-center">
                <div className="flex flex-col justify-center items-center lg:w-3/5 w-full p-3">
                    <input value={inputValue} onChange={handleInputChange} ref={idInput} type="text" className="w-2/3 bg-gatoroboto-100 text-gatoroboto-50 pb-1 pt-1 pr-2 pl-2 placeholder:text-gatoroboto-50 rounded-xl" placeholder="Paste in YouTube video id">
                    </input>
                    <button onClick={async () => setValue(await GetImages(idInput.current.value))} className="w-1/3 lg:w-1/6 bg-gatoroboto-100 text-gatoroboto-50 mt-2 p-3 rounded-3xl border-2 border-gatoroboto-100 hover:bg-gatoroboto-50 hover:text-gatoroboto-100 transition-all">
                        Download images
                    </button>
                    <Images images={images}></Images>
                </div>
            </div>
        </div>
      </>
    )
}
    
export default Content