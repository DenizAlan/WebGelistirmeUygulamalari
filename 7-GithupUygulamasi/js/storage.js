// bir sınıfta metodları statik yazarsak o sınıftan nesne türetmeden o metodlara ulaşabiliriz

class storagex {
  static key = "searchedUsers";
  static getSearchedUserFromStorage() {
    let users;
    if (localStorage.getItem(this.key) == null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem(this.key));
    }

    return users;
  }
  
  //Son arananlar kontrol
  static checkUser(username){
    const users=this.getSearchedUserFromStorage();
    if(!users.includes(username)){
        return true;
    }else{
        return false;
    }
  }

  static addSearchedUserToStorage(username) {
    const users = this.getSearchedUserFromStorage();
    if (this.checkUser) {
        users.push(username.trim());
        localStorage.setItem(this.key,JSON.stringify(users))
    }
  }

  static clearAllSearchedFromStorage(){
    localStorage.removeItem(this.key);

  }
}
