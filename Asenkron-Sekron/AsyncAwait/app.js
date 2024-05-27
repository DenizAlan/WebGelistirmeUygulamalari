//fonsiyon önüne async promise döner

async function hello(){
    return "Hello Word"
}

hello()
//promise döndüğü için then ile yakalarız
.then((res)=>console.log(res))