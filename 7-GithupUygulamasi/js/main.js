const githupName = document.querySelector("#githupName");
const searchForm =document.querySelector("#searchForm");

//(githup.js) githup sınıfındaki bir metodu kullanabilmen için bu sınıftan bir nesne türetmelisin
const githup = new Githup();

runEventListeners();

function runEventListeners(){
    searchForm.addEventListener("submit",search);
}

function search(e){
    const username=githupName.value.trim();
    
    e.preventDefault();
}