const apiKey = 'VLGALLuyiZrCxyMFUfvfH3izL8N13f0d';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(response => {

//     response.json().then(data => console.log(data))

// }).catch(console.error)

peticion
    .then(response => response.json())
    .then(({data})=> {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.error)
