// const getImagenPromesa = () => {
//     const promesa = new Promise((resolve, reject) => {
//         resolve('https://asd.com')
//     })
//     return promesa;
// }

// getImagenPromesa().then(console.log);

const getImagen = async () => {
    try {
        const apiKey = 'VLGALLuyiZrCxyMFUfvfH3izL8N13f0d';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data}= await resp.json();
        
        const {url} = data.images.original;
        console.log(url);
        
        const image = document.createElement('img');
        image.src = url;
        const root = document.querySelector('#root');
        root.append(image)
    } catch (error) {
        console.log(error);
    }
}

getImagen()