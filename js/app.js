document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteButton = document.querySelector('#delete-all');
    deleteButton.addEventListener('click', handleDeleteAll);

});

const handleFormSubmit = function (event) {
    event.preventDefault();
    console.log(event.target);

    const newAnimeEntry = createAnimeEntry(event.target);
    const animeList = document.querySelector('#anime-list');
    animeList.appendChild(newAnimeEntry);

    // event.target.reset();
    
}

const createAnimeEntry = function (form) {

    const newAnimeEntry = document.createElement('li');

    const title = document.createElement('h2');
    title.textContent = form.title.value;
    newAnimeEntry.appendChild(title);

    const genre = document.createElement('p');
    genre.textContent = form.genre.value;
    newAnimeEntry.appendChild(genre);

    const year = document.createElement('p');
    year.textContent = form.year.value;
    newAnimeEntry.appendChild(year);

    return newAnimeEntry;
}

const handleDeleteAll = function (event) {
    const animeList = document.querySelector('#anime-list')
    animeList.innerHTML = '';
    // console.log(animeList)
    // animeList.parentNode.removeChild(animeList);
    // animeList.remove();
}