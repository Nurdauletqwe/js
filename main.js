const Today = document.querySelector('.button'); 
const weather = document.querySelector('.res');


Today.addEventListener('click', async () => { 
  weather.innerHTML = ``

 const city = document.querySelector('.city').value; 
 const apiKey = 'dc2fd99c918a305190ff3177bd7f0026' 
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; 
 try { 
  const response = await fetch(url); 
  const data = await response.json();
  const weatherDescription = data.weather?.[0].description; 
  const temperature = data.main.temp; 
  const feelsLike = data.main.feels_like; 
  const windSpeed = data.wind.speed; 
  const sysSunrise = data.sys.sunrise; 
  const sysSunset = data.sys.sunset; 
  weather.innerHTML = ` 
   <h2>Today in the ${city}:</h2>
   <p>Weather type: ${weatherDescription}</p> 
   <p>Temperature: ${temperature} &#8490;</p> 
   <p>Feels Like: ${feelsLike} &#8490;</p> 
   <p>Wind Speed: ${windSpeed} м/c</p> 
   <p>Sunrise: ${new Date(sysSunrise).getHours()}:${new Date(sysSunrise).getMinutes()}:${new Date(sysSunrise).getSeconds()} AM</p> 
   <p>Sunset: ${new Date(sysSunset).getHours()}:${new Date(sysSunset).getMinutes()}:${new Date(sysSunset).getSeconds()} PM</p> 
  `; 
 } catch (error) { 
  console.error(error); 
  weather.innerHTML = '<p>Failed to retrieve weather data!</p>'; 
 } 
});

const fiveDays = document.querySelector('.btn')
fiveDays.addEventListener('click', async () => { 
  weather.innerHTML = ``

  const city = document.querySelector('.city').value; 
  const apiKey = 'dc2fd99c918a305190ff3177bd7f0026' 
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`; 
  try { 
   const response = await fetch(url); 
   const data = await response.json(); 
   data?.list?.forEach((list) => 
   {
    weather.innerHTML = (`
     <h2>Tomorrow in the ${city}:</h2>
     <p>Weather type: ${list.weather[0].description}</p> 
     <p>Temperature: ${list.main.temp}</p> 
     <p>Feels Like: ${list.main.feels_like}</p> 
     <p>Wind Speed: ${list.wind.speed}</p>`);
   } )
  } catch (error) { 
   console.error(error); 
   weather.innerHTML = '<p>Failed to retrieve weather data!</p>'; 
  } 
 });