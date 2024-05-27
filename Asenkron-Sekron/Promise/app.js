function getUsers(url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
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
        xhr.send();
    } 

    )
}


getUsers("https://jsonplaceholder.typicode.com/users")
//İşlem başarılı ise thenle yakala ..-birden fazla satır kod yazacaksan süslü parantez aç
.then((data)=>{
    //console.log(data)
    data.forEach(user => {
        console.log(user.name)
    });
    console.log("Daha sonra asenkron kodlarını çalıştırabiliriz")
})
//işlem başarısız ise catchle yakala .. --bir satır kod yazacaksan direk yaz
.catch((err)=>console.log(err))
//işlem başarılı-başarısız her durumda yakalar
.finally(()=>{
    //Mail atma kodları yazarsın ...
}
)



