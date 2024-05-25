class Currency {
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_VfxgJLluL9ghv5y24ycWvRo9hChDE598n55JDfZk&base_currency=";
    }

   async exchange(amount,firstCurrency,secondCurrency){
      const response= await fetch(`${this.url}${firstCurrency}`);
      const result=await response.json();
      const exchangeResult=amount * result.data[secondCurrency];

      return exchangeResult;
    }
}