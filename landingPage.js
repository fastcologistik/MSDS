const hero = document.querySelector('.hero');
// Perbaikan: Tambahkan koma (,) antar kelas selector di querySelectorAll
const [Flammable, Corrosive, Toxic, Explosive, Oxidizing, Harmful, Health, Environmental] = document.querySelectorAll(".Flammable, .Corrosive, .Toxic, .Explosive, .Oxidizing, .Harmful, .Health, .Environmental");

fetch("dataLandingPage.json")
  .then(res => res.json())
  .then(data => {
    // 1. Panggil gambar hero
    hero.style.backgroundImage = `url('${data.img}')`;

    // 2. Panggil masing-masing kategori
    const km = data.kategoriBahanKimia;

    Flammable.querySelector('.Title').textContent = km.mudahterbakar[0].judul;
    Flammable.querySelector('img').src = km.mudahterbakar[0].img;
    Flammable.querySelector('.penjelasan').textContent = km.mudahterbakar[0].penjelasan;

    Corrosive.querySelector('.Title').textContent = km.corrsive[0].judul;
    Corrosive.querySelector('img').src = km.corrsive[0].img;
    Corrosive.querySelector('.penjelasan').textContent = km.corrsive[0].penjelasan;

    Toxic.querySelector('.Title').textContent = km.toxic[0].judul;
    Toxic.querySelector('img').src = km.toxic[0].img;
    Toxic.querySelector('.penjelasan').textContent = km.toxic[0].penjelasan;

    Explosive.querySelector('.Title').textContent = km.Explosive[0].judul;
    Explosive.querySelector('img').src = km.Explosive[0].img;
    Explosive.querySelector('.penjelasan').textContent = km.Explosive[0].penjelasan;

    Oxidizing.querySelector('.Title').textContent = km.Oxidizing[0].judul;
    Oxidizing.querySelector('img').src = km.Oxidizing[0].img;
    Oxidizing.querySelector('.penjelasan').textContent = km.Oxidizing[0].penjelasan;

    // Perbaikan: Ubah index [1] jadi [0] karena data cuma ada satu
    Harmful.querySelector('.Title').textContent = km.HarmfulIrritant[0].judul;
    Harmful.querySelector('img').src = km.HarmfulIrritant[0].img;
    Harmful.querySelector('.penjelasan').textContent = km.HarmfulIrritant[0].penjelasan;

    Health.querySelector('.Title').textContent = km.HealthHazard[0].judul;
    Health.querySelector('img').src = km.HealthHazard[0].img;
    Health.querySelector('.penjelasan').textContent = km.HealthHazard[0].penjelasan;

    // Perbaikan: Hapus typo 'toxEnvironmentalHazardic' jadi 'EnvironmentalHazard'
    Environmental.querySelector('.Title').textContent = km.EnvironmentalHazard[0].judul;
    Environmental.querySelector('img').src = km.EnvironmentalHazard[0].img;
    Environmental.querySelector('.penjelasan').textContent = km.EnvironmentalHazard[0].penjelasan;
  })
  .catch(err => console.error("Gagal memuat data JSON:", err));

const buttonMenu = document.getElementById('buttonMenu');
const containerMenu = document.querySelector('.containerMenu');

buttonMenu.addEventListener('click',(e)=>{
  e.preventDefault();
  containerMenu.classList.toggle('active');
})