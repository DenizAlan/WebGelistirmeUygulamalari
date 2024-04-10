let urun1 = {
  isim: "Acer Swift",
  kategori: "Teknoloji",
  fiyat: 13.25
};

let urun2 = {
  isim: "Acer Nitro 5",
  kategori: "Teknoloji",
  fiyat: 17.2
};

let urun3 = {
  isim: "Acer Gaming",
  kategori: "Teknoloji",
  fiyat: 21.123
};

let urun4={
    isim: "Lenovo V15",
    kategori:"Teknoloji",
    fiyat:17
}

let urun5={
    isim: "Lenovo V14",
    kategori:"Teknoloji",
    fiyat:13.299
}

let urun6={
    isim: "Lenovo Ideapad",
    kategori:"Teknoloji",
    fiyat:13.299
}

let urunler = [urun1,urun2,urun3,urun4,urun5,urun6];

let filtreliUrunler=[];
let kullaniciUrunİsmi= prompt("Bir ürün ismi giriniz");
FiltreliUrunleriDoldur(urunler);
FiltreliUrunleriYazdir(filtreliUrunler);



function FiltreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toLocaleUpperCase().includes(kullaniciUrunİsmi.toLocaleUpperCase(),0)){
            filtreliUrunler.push(urun);
        }
    })
}

function FiltreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("---------------------------------")
        console.log("|"+urun.isim+"|"+urun.kategori+"|"+urun.fiyat);
        console.log("---------------------------------")

    })
}

