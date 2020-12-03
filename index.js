window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('song-list').addEventListener('click', event => {
        songClick(event);
    })
})

const spotifyEmbed = {
    
}

const songClick = (event) => {
    console.log(event.target.innerText)
    document.getElementById('clicked-song').innerText = event.target.innerText;
}