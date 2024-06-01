//Elementleri seçelim

const container= document.querySelector(".container")
const selectMovie= document.querySelector("#selectMovie")
const count = document.querySelector("#count");
const amount=document.querySelector("#amount")
const seats =Array.from( document.querySelectorAll(".seat"));
const buyButton = document.querySelector("#buyButton")



runEventListeners()

function runEventListeners(){
    container.addEventListener("click" , select)
    selectMovie.addEventListener("change",changeMovie)
    document.addEventListener("DOMContentLoaded",runPageLoaded)  //Ne zaman sayfa yenilenirse
    buyButton.addEventListener("click", buyTicket)

}


function select(e){
    const selectedElement= e.target.parentElement;
    //class ı seat olan ve class ı full olmayanlara ; selected adında yeni class ekleme
    if(selectedElement.classList.contains("seat")&& !selectedElement.classList.contains(".full"))
    {
        //class ı seat olana toggle ile yeni bir class ismi ekledik .
        //eğer toggle yerine add ile class ekleseydik kalıcı eklemiş olurduk .
        //toggle ilk bastıgında classı ekler ikinci bastıgında class ı kaldırır yani
        //toggle varsa siler , yoksa ekler
        selectedElement.classList.toggle("selected");
        calculate();
        saveSelectedSeatsIndexToStorage();
        saveSelectedMovieIndexToStorage()
        
    }
}

//Sayfa yenilenirse
function runPageLoaded(){
    const selectedSeatsIndex=Storagex.getSelectedSeatsFromStorage();
    const fullSeatsIndex=Storagex.getFullSeatsFromStorage();
    seats.forEach((seat , index)=>{
        if(selectedSeatsIndex.includes(index)){
            seat.classList.add("selected")
        }
    })

    seats.forEach((seat,index)=>{
        if(fullSeatsIndex.includes(index)){
            seat.classList.add("full")
        }
    })

    selectMovie.selectedIndex=Storagex.getSelectedMovieIndexFromStorage()
    calculate();
}



//Seçili olan koltuk sayısı 
function getSelectedSeats(){
    //Seçili koltukları array e cevirme yol 1
    // const selectedList =Array.from( document.querySelectorAll(".selected"));

    //Seçili koltukları array e cevirme yol 2
    const selectedList =[... document.querySelectorAll(".selected")]
    return selectedList;
}

//Seçili olan koltugun ındexini alma
function getSelectedSeatsIndex(){
    const selectedList=getSelectedSeats();
    const selectedSeatsIndex=selectedList.map((seat)=>{
        return seats.indexOf(seat);
    })
    return selectedSeatsIndex;
}

//Seçili olan koltukların index no larını storage kaydetme
function saveSelectedSeatsIndexToStorage(){
    const selectedSeatsIndex= getSelectedSeatsIndex();
    Storagex.addSelectedSeatToStorage(selectedSeatsIndex);
}

function saveSelectedMovieIndexToStorage(){
    const selectedMovieIndex = selectMovie.selectedIndex;
    Storagex.addSelectedMovieToStorage(selectedMovieIndex);

}

//Film değişikliği yapılırsa
function changeMovie(){
    calculate()
    saveSelectedMovieIndexToStorage();
}

//Bilet Fiyati hesaplama
function calculate(){
    const selectedSeatsCount= getSelectedSeats().length;
     const price= selectMovie.value;
    count.textContent=selectedSeatsCount;
    amount.textContent=selectedSeatsCount*price
}

//Satış
function buyTicket(){
    if(confirm("Satın almak istiyor musunuz ?")){
        const selectedSeats = getSelectedSeats();
       const selectedSeatsIndex= getSelectedSeatsIndex();
       selectedSeats.forEach(seat=>{
        seat.classList.remove("selected")
        seat.classList.add("full")
       })
       Storagex.addFullSeatToStorage(selectedSeatsIndex)
       Storagex.addSelectedSeatToStorage(getSelectedSeatsIndex())

    }
}