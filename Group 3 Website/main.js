const heroList = [
"Aamon","Akai","Aldous","Alice","Alpha","Angela","Argus","Arlott","Atlas","Aulus",
"Aurora","Badang","Balmond","Bane","Barats","Baxia","Beatrix","Belerick","Benedetta",
"Brody","Bruno","Carmilla","Cecilion","Chang'e","Chou","Claude","Clint","Cyclops",
"Diggie","Dyrroth","Edith","Esmeralda","Estes","Eudora","Fanny","Floryn","Franco",
"Fredrinn","Freya","Gatotkaca","Gloo","Gord","Granger","Grock","Guinevere","Gusion",
"Hanabi","Hanzo","Harith","Harley","Hayabusa","Helcurt","Hilda","Hylos","Irithel",
"Jawhead","Johnson","Joy","Julian","Kadita","Kagura","Kaja","Karina","Karrie",
"Khaleed","Khufra","Kimmy","Lancelot","Lapu-Lapu","Layla","Leomord","Lesley","Ling",
"Lolita","Luo Yi","Lylia","Martis","Masha","Mathilda","Melissa","Minotaur","Minsitthar",
"Moskov","Nana","Natalia","Natan","Novaria","Odette","Paquito","Pharsa","Phoveus",
"Popol and Kupa","Rafaela","Roger","Ruby","Saber","Selena","Silvanna","Sun",
"Terizla","Thamuz","Tigreal","Uranus","Valentina","Vale","Valir","Vexana","Wanwan",
"X.Borg","Xavier","Yi Sun-shin","Yin","Yve","Zhask","Zilong"
];

function generateHero(){
    const random = heroList[Math.floor(Math.random() * heroList.length)];
    document.getElementById("randomHero").innerText = random;
}


