const formWrapper = document.querySelector(".form-wrapper");
const form=document.querySelector("#form");
const searchİnput= document.querySelector("#searchInput");
const buttonWrapper= document.querySelector(".button-wrapper");
const searchButton= document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper= document.querySelector(".imageList-wrapper");

runEventListeners();

function runEventListeners(){
    form.addEventListener("submit" , search);
    clearButton.addEventListener("click",clear)
}

function clear(){
    searchİnput.value="";
    //Array.from(imageListWrapper.children).forEach((child)=>child.remove())
    imageListWrapper.innerHTML="";
}

function search(e){
    
    const value = searchİnput.value.trim();
    //@RequestParam-Spring-Rest APİ
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method: "GET",
        headers : {
            Authorization : "Client-ID R_S1Ed2wB2kKZNq1ryelcqVqd_tQ71WoyQL2eKef5DU"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        //datamız array result unda dönüyoruz
        data.results.forEach((image) => {
            //console.log(image.urls.small)
            addImageToUI(image.urls.small)
        });
    })
    .catch((err)=>console.log(err));
    e.preventDefault();
}

function addImageToUI(url){
       const div = document.createElement("div");
       div.className="card";
       
       const img = document.createElement("img");
       img.setAttribute("src",url);
       img.height=`400`;
       img.width=`400`;

       div.append(img);
       imageListWrapper.appendChild(div)
}