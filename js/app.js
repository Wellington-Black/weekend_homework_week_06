document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function (event) {
    event.preventDefault();
    console.log(event);

    // const newAnimeName = document.createElement('li');
    // newAnimeName.textContent = `${event.target.name.value}`;
    // // newAnimeName.classList.add(`${event.target.name.value}`);

    // const list = document.querySelector('ul');
    // list.appendChild(newAnimeName);


}