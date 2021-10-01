let gameOfThrones = document.getElementById('game-of-thrones');
let search = document.getElementById('search');

let data = [];

search.addEventListener('keyup', (e) => {
    const searchCharacter = e.target.value.toLowerCase();
    const filterCharacter = data.filter((char) => {
        return (char.fullName.toLowerCase().includes(searchCharacter));
    })
    dataGameOfThrones(filterCharacter);
})

const displayGameOfThrones = async () => {
    try {
        const resp = await fetch("https://thronesapi.com/api/v2/characters");
        data = await resp.json();
        console.log(data);
        dataGameOfThrones(data);
    }
    catch(err) {
        document.write("Error fetching characters");
    }
}

const dataGameOfThrones = (dataGOT) => {
    
    const output = dataGOT.map((ele) => {
        return `<div class='box'>
        <div> Title: ${ele.title}</div>
        <div> Family: ${ele.family}</div>
        <div> Full Name: ${ele.fullName}</div>
        <div class='image-container'>
        <img src='${ele.imageUrl}' />
        </div>
        </div>`
    })
    gameOfThrones.innerHTML = output;
}

displayGameOfThrones();