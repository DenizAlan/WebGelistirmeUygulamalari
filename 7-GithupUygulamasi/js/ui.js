class UI {
    constructor (){
        this.profileContentDiv=document.querySelector("#profileContentDiv")
        this.githupNameInput=document.querySelector("#githupName")
        this.tableContent=document.querySelector("#tableContent")
        this.isShowRepo=true;
        this.searchedUserList=document.querySelector("#searchedUserList")
       
        
    }

    fillSearchedUserToUIFromStorage(){
        const users= storagex.getSearchedUserFromStorage();
        if(users!=null && users.length>0){
           users.forEach(user=>{
            const li = document.createElement("li");
            li.className="list-group-item";
            li.textContent=user;
            this.searchedUserList.appendChild(li);
           })
        }
    }

    addSearchedUserToUI(username){
        if(storagex.checkUser(username)){
        const li = document.createElement("li");
        li.className="list-group-item";
        li.textContent=username;
        this.searchedUserList.appendChild(li);
        }
    }

    addUserProfileToUI(user){
        
        this.profileContentDiv.innerHTML=`
        <div id="profilDiv" class="col-sm-12 col-md-4 col-lg-4">
        <img  id="profilImg" class="mb-3" src="${user.avatar_url}" width="200" height="200" alt="">
        <hr style="border: 1px solid lightgrey;" width="200px">
        <span>${user.name}</span>
        <span>Yazılım Geliştirici</span>
    </div>
    <div class="col-sm-12 col-md-8 col-lg-8">
       <div  id="badgeDiv" class="mt-2">
        <button type="button" class="btn btn-primary btn-sm">
            Takipçi <span class="badge badge-light ">${user.followers}</span>
          </button>
          <button type="button" class="btn btn-success btn-sm">
            Takip Edilen <span class="badge badge-light ">${user.following}</span>
          </button>
          <button type="button" class="btn btn-secondary btn-sm">
            Repolar <span class="badge badge-light ">${user.public_repos}</span>
          </button>
       </div>
       <div id="infoDiv" class="mt-3">
            <div class="info">
                <img src="image/company.png" width="40px" height="40px" alt="">
                <span>${user.company==null ? "" : user.company}</span>
            </div>
            <div class="info">
                <img src="image/location.png" width="40px" height="40px" alt="">
                <span>${user.location==null ? "" : user.location}</span>
            </div>
            <div class="info">
                <img src="image/mail.png" width="40px" height="40px" alt="">
                <span>${user.email==null ? "" : user.email}</span>
            </div>
            <div class="info">
                <a id="showRepo" href="#">Repoları Göster</a>
            </div>
       </div>
    </div> 
        `
    }

    clearInput(){
        this.githupNameInput.value="";
        this.profileContentDiv.innerHTML="";
        this.tableContent.innerHTML=""
    }

    clearAll(){
        this.searchedUserList.innerHTML=""
    }

    checkMessage(){
        const showRepoLink= document.querySelector("#showRepo")
        if(this.isShowRepo){
           
            showRepoLink.textContent="Repoları Göster"
        }else{
            showRepoLink.textContent="Repoları Kapat"
        }
    }

    showRepos(repos){
       if(this.isShowRepo){
        if(repos!=null && repos.length>0){
            let sayac=1;
          
            repos.forEach(repo=>{
                
                this.tableContent.innerHTML+=`
                
                <tr>
                        <th scope="row">${sayac}</th>
                        <td>${repo.name}</td>
                        <td>${repo.created_at}</td>
                </tr>      
                `
                sayac++
            })
           }
           this.isShowRepo=false;
           this.checkMessage()
       }else{
        this.isShowRepo=true;
        this.checkMessage();
        this.tableContent.innerHTML=""
       }
      
    }


}