// All metodu

//promis oluşturalım
const p1=Promise.resolve("Birinci promise başarılı")
const p2=Promise.resolve("İkinci promise başarılı")
const p3=new Promise((resolve,reject)=>{
    resolve("Üçüncü promise başarılı")
})
const p4=Promise.reject("Hatalı dönen promise")
//Dizi şeklinde yazılır.Biri bile hatalı(reject) olursa catch e düşer

Promise.all([p1,p2,p3])
.then((res)=>{
    //arrayde dön
    for(let value of res){
        console.log(value)
    }
})
.catch((err)=>console.log(err))