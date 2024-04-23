import appsettings from "../appsettings.json"

const apiKey = appsettings.api_key

const part = "snippet"

export async function GetImages(id){
    try{
        const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=" + part + "&id=" + id + "&key=" + apiKey, {
            method: 'GET',
        });

        if(!response.ok){
            console.error(response.status)
            return []
        }

        const data = await response.json();
        console.log(data)

        const thumbnails = data.items[0].snippet.thumbnails

        let thumbnailList = []

        thumbnailList.push(thumbnails.default)
        thumbnailList.push(thumbnails.medium)
        thumbnailList.push(thumbnails.high)
        thumbnailList.push(thumbnails.standard)
        thumbnailList.push(thumbnails.maxres)

        return thumbnailList
    }
    catch (error) {
        console.error(error)
        return []
    }
}