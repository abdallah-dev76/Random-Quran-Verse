let ayah = document.querySelector(".ayah");
let ayahName = document.querySelector(".ayah-name");
let start = document.querySelector(".start");

start.addEventListener("click", () => {
  ayah.classList.remove("active");
  ayahName.classList.remove("active");
  const randomAyah = getRandomAyah();
  const surahAPI = `https://api.alquran.cloud/v1/ayah/${randomAyah}`;
  fetchSurah(surahAPI);
});

function fetchSurah(API) {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      ayah.classList.add("active", "blur-effect");
      ayahName.classList.add("active");
      ayah.innerHTML = data.data.text;
      ayahName.innerHTML = `${data.data.surah.name} الآية ( ${data.data.numberInSurah} )`;
    });
}

function getRandomAyah() {
  return Math.floor(Math.random() * 6236) + 1;
}
