class WeatherAPI{
    constructor(){
        this.baseURL="https://api.openweathermap.org/data/2.5/weather"
        this.apiKey="44cf51540659600800b939f099272af2"
    }

    // getWeatherInfo(cityName){
    //     fetch(`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`)
    //     .then(response=>response.json())
    //     .then(data=>console.log(data))
    //     .catch(err=>console.log(err))
    // }

    async getWeatherInfo (cityName){
        const response =await fetch (`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`)
        const data =await response.json()
        return data
    }
}