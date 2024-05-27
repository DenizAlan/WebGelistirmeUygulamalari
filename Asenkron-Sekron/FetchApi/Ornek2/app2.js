// 1.Yol
//Metodun içinde kontrolleri yapabilirsin
//Önerilen bu yol

function getData(url){
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

getData("https://jsonplaceholder.typicode.com/users")


// 2.Yol 
//metodu çagırdıktan sonra kontrolleri yapabilirsin

function getData2(url){
    return fetch(url)
}

getData2("https://jsonplaceholder.typicode.com/albums")
.then((response)=>response.json())
.then((data)=>console.log(data))