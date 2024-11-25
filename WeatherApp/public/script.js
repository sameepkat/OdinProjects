const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');

cityForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const cityName = cityInput.value.trim();
    cityInput.focus();
    cityInput.select();

    if (cityName === '') {
        alert('Please enter a city name.');
        return;
    }

    try {
        const response = await fetch(`/api/weather?city=${cityName}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const weatherData = await response.json();
        console.log(weatherData); 
    } catch (error) {
        console.error(error.message);
        alert('Could not fetch weather data. Please try again.');
    }
});
