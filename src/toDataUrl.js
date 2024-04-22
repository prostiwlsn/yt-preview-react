export async function toDataURL(url) {
    const blob = await fetch(url, {mode: 'no-cors'}).then(res => {console.log(res); return res.blob()});

    console.log(blob)
    return URL.createObjectURL(blob);
}