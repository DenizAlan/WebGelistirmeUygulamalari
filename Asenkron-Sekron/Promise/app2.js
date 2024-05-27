//Id si 3 olan User'a istek atıp yorumunu almak

function getCommentsByUsersId(url){
    return new Promise((resolve,reject)=>{
        const xhr= new XMLHttpRequest();
        xhr.addEventListener("readystatechange",()=>{
            try {
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText))
                }
            } catch (error) {
                reject(error);
            }
        })
    
        xhr.open("GET",url)
        xhr.send()
    
    })
}

getUsers("https://jsonplaceholder.typicode.com/users/3")
.then((data)=>{
    console.log(data);
    //dışarıya return ederek dışarıda then ile yakalabilirsin
    return getCommentsByUsersId(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
})
.then((res)=>console.log(res))
.catch((error)=>console.log(error))
.finally("Her zaman çalışır")