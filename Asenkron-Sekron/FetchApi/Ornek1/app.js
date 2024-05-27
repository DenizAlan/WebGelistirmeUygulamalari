//fetch ler promise döner

//iki then ile
//response içindeki json ı thenle yakala dataya ulaş.
function getStudents(url){
   fetch(url)
   .then((response)=>{
    return response.json();
   })
   .then((data)=>console.log(data))
   .catch((err)=> console.log(err))
}

getStudents("student.json")