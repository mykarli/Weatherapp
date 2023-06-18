const cityInput = document.querySelector('.inputText');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    getData(cityInput.value);

});

function getData(name) {
    const API ="a34c580f64f0e793e9125152ca7a064b";
    const baseURL =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`
    fetch(baseURL).then(res => res.json())
    .then(data => {
        const {name,sys:{country},main:{temp,feels_like},weather : [{description}] } = data;
        const city = document.querySelector('#sehir');
        const temperature = document.querySelector('#sicaklik');
        const weatherDesc = document.querySelector('#havaDurumu');
        const feel = document.querySelector('#hissedilen');
        city.textContent = `${name},${country}`;
        weatherDesc.textContent = `${description}`;
        temperature.textContent = `${temp}`;
        feel.textContent = `${feels_like}`;
    })
    .catch(err => console.warn(err))
}