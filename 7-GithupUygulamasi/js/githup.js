class Githup{
    constructor(){
        this.url="https://api.githup.com/users/"
    }

    async getGithupData(userName){
       const userData= await ((await fetch(`${this.url}${userName}`)).json())
       const repoData=await ((await fetch (`${this.url}${userName}/repos`)).json())

       return{
        user : userData,
        repo : repoData
       }
    }
}