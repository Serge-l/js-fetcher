console.log('about to fetch rainbow');

const filenames = [
    'images/cup-of-coffee.jpg',
    'images/keks.jpg',
    'images/rainbow.jpg'
];
console.table(filenames)




const push = document.getElementById('push');
const pictura = document.getElementById('pictura');

push.addEventListener('click', function() {
    if (poem.classList.contains('hiden')) {
        poem.classList.remove('hiden');
        push.textContent = 'close request';
    } else {
        poem.classList.add('hiden');
        push.textContent = 'request poem'
    }




    console.log('about to fetch a poem');
    catchPoem()
        .then(poem => {
            document.getElementById('poem').innerText = poem;
            console.log('yay');

        })

    .catch(error => {
        console.log('error!');
        console.error(error);
    });


    async function catchPoem() {
        const response = await fetch('poem.txt');
        return await response.text();
    }

})





pictura.addEventListener('click', function() {
    catchRainbows(filenames)
        .then(response => {
            console.log('yaay');
        })

    .catch(error => {
        console.log('error!');
        console.error(error);
    })
    async function catchRainbows(filenames) {
        for (let filename of filenames) {

            const response = await fetch(filename);
            const blob = await response.blob();
            const img = document.createElement('img');
            img.src = URL.createObjectURL(blob);
            img.width = '200';
            document.body.append(img);

        }

    }


})



// fetch('rainbow.jpg').then(response => { //setting up a response 
//         console.log(response);
//         return response.blob(); // converts a respons into an image blob
//     }).then(blob => {
//         console.log(blob)

//     })
//     .catch(error => {
//         console.log('error!');
//         console.error(error);
//     });