class KartBase {
  indirimOrani = 20;

  constructor(isim, soyisim, kartVarMi, urunler) {
    this.isim = isim;
    this.soyisim = soyisim;
    this.kartVarMi = kartVarMi;
    this.urunler = urunler;
  }

  hesaplaa() {
    let odenecekTutar = 0;
    if (this.urunleriKontrolEt(this.urunler)) {
      //sepetim dolu
      if (this.kartVarMi) {
        this.urunler.forEach((urun) => {
          odenecekTutar += (urun.fiyat * (100 - this.indirimOrani)) / 100;
        });
      } else {
        this.urunler.forEach((urun) => {
          odenecekTutar += urun.fiyat;
        });
      }
    } else {
      alert("En az bir tane ürün almalısınız");
    }
    return odenecekTutar;
  }

  urunleriKontrolEt(urunler) {
    if (urunler != null && urunler.length > 0) {
      return true;
    }
    return false;
  }
}
