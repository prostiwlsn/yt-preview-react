import { toDataURL } from "./toDataUrl";

export async function downloadImage(url) {
    console.log("downloading", url)

    const a = document.createElement("a");
    a.href = await toDataURL(url);
    a.download = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}