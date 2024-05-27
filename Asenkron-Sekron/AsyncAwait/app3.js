//await kullanabilmen için fonk başına async i kullanman lazım
//bir yerde promise dönüyorsa orayı awaitle beklet ki sonuç tamamlansın

//1yol

document.querySelector("#button2").addEventListener("click",async ()=>{
   const responsePost= await fetch("https://jsonplaceholder.typicode.com/posts/1");
   const post = await responsePost.json();
   const responseComments= await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
   const comments = await responseComments.json();
   console.log(comments)
    
})

//2.yol kısası

document.querySelector("#button3").addEventListener("click",async ()=>{
    const post2= await ((await fetch("https://jsonplaceholder.typicode.com/posts/2")).json());
    const comments2=await ( (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post2.id}`)).json());
     console.log(post2 , comments2)
     
 })