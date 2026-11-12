//header
const [gambarLogo, teksLogo] = document.querySelectorAll("#headerKiri img, #headerKiri .teks");

const title = document.querySelector('.title')
const hero = document.getElementById('hero');

fetch("dataMsds.json")
.then(response => response.json())
.then(data => {
    gambarLogo.src = data.logo;
    teksLogo.textContent = data.teks;
    hero.style.backgroundImage = `url('${data.hero.backgroundhero})`
    title.textContent = data.hero.hero1;
});

// wadah produk
const inputCari = document.getElementById('inputCari');
const wadahProduk = document.getElementById('wadahProduk');

let dataChemical = {};
let semuaProduk = [];

fetch("dataChemical.json")
.then(response => response.json())
.then(data =>{
    // ambil dataChemical semua
    dataChemical = data.KategoriChemical;
    //Gabungkan semua data yang ada di dataChemical
    semuaProduk = [
        ...dataChemical.keras,
        ...dataChemical.sedang,
        ...dataChemical.ringan,
    ];
    tampilkanProduk(semuaProduk);
})
// 2. Fungsi merender kartu ke HTML
function tampilkanProduk(list) {
    if (list.length === 0) {
      wadahProduk.innerHTML = `<p class="kosong">Produk chemical tidak ditemukan.</p>`;
      return;
    }
  
    wadahProduk.innerHTML = list.map(item => `
      <div class="kartu">
        <h3>${item.namaChemical}</h3>
        <img src="${item.img}" alt="${item.namaChemical}" width="60" loading="lazy">
        <p>${item.penjelasan}</p>
        <h3 class='detailChemical'>Detail</h3>
        <p class='dilusi'>Dilusi<br><br>${item.dilusi}</p>
        <p class='apd'>APD<br><br>${item.apd}</p>
      </div>
    `).join("");
  }
  

// 3. Fungsi saat tombol kategori diklik
function filterKategori(jenis) {
  if (jenis === "semua") {
    tampilkanProduk(semuaProduk);
  } else {
    tampilkanProduk(dataChemical[jenis]); // Ubah KategoriChemical menjadi dataChemical
  }
}
wadahProduk.addEventListener("click", (e) => {
    if (e.target.classList.contains("detailChemical")) {
      e.target.closest(".kartu").classList.toggle("active");
    }
  });
  
// 4. Fungsi saat user mengetik di Search Bar
inputCari.addEventListener("input", (e) => {
  const kataKunci = e.target.value.toLowerCase();
  const hasil = semuaProduk.filter(item => 
    item.namaChemical.toLowerCase().includes(kataKunci)
  );
  tampilkanProduk(hasil);
});

