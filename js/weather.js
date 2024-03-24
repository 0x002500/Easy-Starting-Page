window.addEventListener('load', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d22226c7401b13e8b4f4cddd7b3051db`;
            
            fetch(weatherApiUrl)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('weather-deg').textContent = `${(data.main.temp - 273.15).toFixed(1)}°C`;
                    document.getElementById('weather-stat').textContent = `${data.weather[0].description}`
                })
                .catch(error => {
                    console.error('获取天气信息时出错：', error);
                    document.getElementById('weather-info').textContent = '无法获取天气信息';
                });
        }, (error) => {
            console.error('获取地理位置时出错：', error);
            document.getElementById('weather-info').textContent = '无法获取地理位置';
        });
    } else {
        console.error('浏览器不支持地理位置 API');
        document.getElementById('weather-info').textContent = '浏览器不支持地理位置 API';
    }
});