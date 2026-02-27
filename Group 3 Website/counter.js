const heroes = heroList;

const counters = {
"Fanny": ["Khufra", "Franco", "Minsitthar", "Saber", "Phoveus"],
"Ling": ["Khufra", "Phoveus", "Franco", "Ruby", "Minsitthar"],
"Lancelot": ["Khufra", "Kaja", "Franco", "Eudora", "Phoveus"],
"Gusion": ["Helcurt", "Eudora", "Saber", "Franco", "Kaja"],
"Hayabusa": ["Khufra", "Minsitthar", "Ruby", "Franco", "Kaja"],
"Helcurt": ["Diggie", "Kaja", "Franco", "Khufra"],
"Natalia": ["Khufra", "Rafaela", "Diggie", "Franco"],
"Saber": ["Diggie", "Barats", "Fredrinn", "Khufra"],
"Karina": ["Karrie", "Lunox", "Baxia", "Franco"],
"Aamon": ["Eudora", "Saber", "Franco", "Kaja"],
"Joy": ["Khufra", "Franco", "Minsitthar", "Phoveus"],
"Nolan": ["Khufra", "Franco", "Kaja", "Phoveus"],
"Layla": ["Saber", "Ling", "Natalia", "Lancelot", "Khufra"],
"Miya": ["Natalia", "Saber", "Khufra", "Ling"],
"Clint": ["Ling", "Lancelot", "Saber", "Khufra"],
"Moskov": ["Khufra", "Franco", "Saber", "Atlas"],
"Karrie": ["Saber", "Natalia", "Franco", "Ling"],
"Lesley": ["Ling", "Lancelot", "Saber", "Natalia"],
"Wanwan": ["Khufra", "Minsitthar", "Franco", "Phoveus"],
"Brody": ["Ling", "Saber", "Natalia", "Lancelot"],
"Beatrix": ["Saber", "Natalia", "Ling", "Lancelot"],
"Melissa": ["Lancelot", "Saber", "Franco", "Ling"],
"Irithel": ["Khufra", "Franco", "Saber", "Ling"],
"Hanabi": ["Ling", "Lancelot", "Saber", "Khufra"],
"Bruno": ["Khufra", "Saber", "Natalia", "Ling"],
"Claude": ["Khufra", "Atlas", "Eudora", "Saber"],
"Granger": ["Ling", "Lancelot", "Saber", "Natalia"],
"Popol & Kupa": ["Lancelot", "Ling", "Saber", "Claude"],
"Aldous": ["Kaja", "Franco", "Phoveus", "Khufra"],
"Alucard": ["Baxia", "Karrie", "Franco", "Kaja"],
"Balmond": ["Valir", "Lunox", "Karrie", "Baxia"],
"Chou": ["Diggie", "Phoveus", "Ruby", "Khufra"],
"Ruby": ["Valir", "Baxia", "Karrie", "Franco"],
"Zilong": ["Khufra", "Franco", "Saber", "Phoveus"],
"Freya": ["Valir", "Karrie", "Baxia", "Franco"],
"Sun": ["Baxia", "Claude", "Karrie", "Valir"],
"Jawhead": ["Diggie", "Valir", "Franco", "Phoveus"],
"Leomord": ["Valir", "Karrie", "Lunox", "Baxia"],
"Thamuz": ["Baxia", "Lunox", "Karrie", "Valir"],
"Martis": ["Khufra", "Franco", "Kaja", "Phoveus"],
"Guinevere": ["Diggie", "Khufra", "Valir", "Franco"],
"Esmeralda": ["Dyrroth", "Baxia", "Lunox", "Karrie"],
"Silvanna": ["Diggie", "Valir", "Franco", "Kaja"],
"Paquito": ["Franco", "Khufra", "Kaja", "Phoveus"],
"Yu Zhong": ["Baxia", "Valir", "Karrie", "Lunox"],
"Terizla": ["Valir", "Claude", "Lunox", "Karrie"],
"Minsitthar": ["Valir", "Lunox", "Diggie", "Karrie"],
"Arlott": ["Diggie", "Franco", "Khufra", "Kaja"],
"Cici": ["Khufra", "Franco", "Baxia", "Phoveus"],
"Yin": ["Diggie", "Kaja", "Franco", "Khufra"],
"Julian": ["Eudora", "Franco", "Saber", "Kaja"],
"Phoveus": ["Valir", "Lunox", "Karrie", "Franco"],
"Dyrroth": ["Valir", "Khufra", "Kaja", "Franco"],
"Eudora": ["Franco", "Kaja", "Khufra", "Saber"],
"Kagura": ["Franco", "Saber", "Khufra", "Natalia"],
"Aurora": ["Franco", "Kaja", "Saber", "Natalia"],
"Lunox": ["Franco", "Kaja", "Saber", "Natalia"],
"Valir": ["Lancelot", "Ling", "Natalia", "Saber"],
"Xavier": ["Natalia", "Saber", "Helcurt", "Ling"],
"Yve": ["Ling", "Lancelot", "Saber", "Natalia"],
"Pharsa": ["Natalia", "Ling", "Saber", "Lancelot"],
"Cecilion": ["Ling", "Saber", "Natalia", "Lancelot"],
"Cyclops": ["Khufra", "Franco", "Saber", "Natalia"],
"Zhask": ["Lancelot", "Ling", "Saber", "Natalia"],
"Harley": ["Franco", "Kaja", "Saber", "Natalia"],
"Lylia": ["Franco", "Khufra", "Saber", "Natalia"],
"Kadita": ["Franco", "Diggie", "Saber", "Khufra"],
"Vale": ["Franco", "Saber", "Natalia", "Ling"],
"Novaria": ["Natalia", "Ling", "Saber", "Lancelot"],
"Vexana": ["Ling", "Lancelot", "Saber", "Natalia"],
"Gord": ["Ling", "Lancelot", "Saber", "Natalia"],
"Nana": ["Diggie", "Franco", "Saber", "Natalia"],
"Odette": ["Franco", "Saber", "Diggie"],
};

heroes.forEach(h=>{
    if(!counters[h]){
        counters[h] = ["Franco","Khufra","Saber"];
    }
});

window.onload = () => {
    const select = document.getElementById("counterHero");
    heroes.forEach(h=>{
        select.innerHTML += `<option>${h}</option>`;
    });
}

function showCounters(){
    const hero = counterHero.value;
    counterResult.innerHTML = `<b>Counters:</b> ${counters[hero].join(", ")}`;
    
function showCounter(hero){
  const result = document.getElementById("result");

  result.innerHTML = `
    <div class="hero-card">
      <img src="images/${hero}.webp" onerror="this.src='images/${hero}.jfif'">
      <h2>${hero}</h2>
    </div>
  `;

  // your existing counter logic continues here
}

