const githupName = document.querySelector("#githupName");
const searchForm =document.querySelector("#searchForm");
const clearButton= document.querySelector("#clearButton")


//(githup.js) githup sınıfındaki bir metodu kullanabilmen için bu sınıftan bir nesne türetmelisin
const githup = new Github();
const ui = new UI();

runEventListeners();

function runEventListeners(){
    searchForm.addEventListener("submit",search);
    clearButton.addEventListener("click",clearInput)
   
}

function clearInput(){
    ui.clearInput()
}

function search(e){
    const username=githupName.value.trim();
    if(username==null || username.trim()==""){
        alert("Lütfen bir kullanıcı adı giriniz")
    }else{
        githup.getGithubData(username)
        .then((response)=>{
            ui.addUserProfileToUI(response.user)
            document.querySelector("#showRepo").addEventListener("click",()=>ui.showRepos(response.repo));
        })
        .catch((err)=>console.log(err))
    }
    
    e.preventDefault();
}

function showRepos(){
    ui.showRepos();
}