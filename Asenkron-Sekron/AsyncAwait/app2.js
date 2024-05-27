//then kalabalıgı oluyor app3.js de bu kolaylaşacak

document.querySelector("#button").addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=>response.json())
    .then((post)=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response)=>response.json()
        .then((comments)=>console.log(comments))
    )
    })
})