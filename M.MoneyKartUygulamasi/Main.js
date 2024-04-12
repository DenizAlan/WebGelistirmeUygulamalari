let mesaj = `
Hoşgeldiniz.
Money Kartınız Var mı?

`;
const urunler = [
  {
    urunİsmi: "Çikolata",
    fiyat: 15,
  },
  {
    urunİsmi: "Cips",
    fiyat: 30,
  },
  {
    urunİsmi: "Soda",
    fiyat: 20,
  },
];
let sonuc = confirm(mesaj);
let isim = prompt("Adınızı giriniz");
let soyisim = prompt("Soyadınızı giriniz");
const musteri = new Musteri(isim, soyisim, sonuc, urunler);
let odenecekTutar = musteri.hesapla();

alert(`Müşteri Bilgileri :${musteri.isim} ${musteri.soyisim}
        Ödenecek Tutar : ${odenecekTutar}`);
