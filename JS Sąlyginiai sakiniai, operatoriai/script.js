console.log('1 užduotis:');
const n = 3;
const m = 2;
if (n>m) {
    console.log('Ilgiau aptarnaujamas pirmasis pirkėjas');
}
else {
    console.log('Ilgiau aptarnaujamas antrasis pirkėjas');
}

console.log('2 užduotis:');
const a = 3;
const b = 2;
if (a>b) {
    console.log('Turnyrą laimėjo Jonas');
}
else {
    console.log('Turnyrą laimėjo Povilas.');
}

console.log('3 užduotis:');
const martynas = 300;
const karolis = 200;
if (martynas>karolis) {
    console.log('Daugiau saldainių pirko Martynas');
}
else {
    console.log('Daugiau saldainių pirko Karolis.');
}

console.log('4 užduotis:');
const metai = 1904;
if ((metai - 1896) % 4 == 0){
    const zaidyniuNr = (metai - 1896) / 4 + 1; //+1, kad priskaičiuoti pirmąsias olimpines žaidynes.
    console.log('Metai yra olimpiniai. ' + 'Olimpinių žaidynių nr: ' + zaidyniuNr);
}
else {
    console.log('Metai neolimpiniai.')
}

console.log('5 užduotis:');
const kiekLikoLaiko = 35;
if (kiekLikoLaiko >= 30){
    console.log('Liko dar labai daug laiko');
}
else if (kiekLikoLaiko < 30 && kiekLikoLaiko > 15){
    console.log('Liko dar nemažai laiko');
}
else if (kiekLikoLaiko <= 7){
    console.log('Pamoka baigiasi.');
}

console.log('6 užduotis:');
const metaiNew = 1700;
if ((metaiNew % 400 == 0)||(metaiNew % 4 == 0 && metaiNew % 100 != 0)) {
    console.log('Metai yra keliamieji.')
}
else {
    console.log('Metai yra paprastieji.')
}

console.log('7 užduotis:');
let loterijosNr = 440066;
let reminder = 0;
let sum = 0;
while (loterijosNr > 0) {
  sum += loterijosNr % 10;
  loterijosNr = Math.floor(loterijosNr / 10);
}
if (sum % 4 == 0){
    console.log('Loterijos bilietas yra laimingas');
} else {
    console.log('Loterijos bilietas nieko nelaimėjo');
}

console.log('8 užduotis:');
const knygos = 10;
const puslapiai = 200;
const savaites = 11;
const p1 = 40, p2 = 40, p3 = 50, p4 = 40, p5 = 30;
const perskaitoPerSavaite = p1+p2+p3+p4+p5;
if (knygos*puslapiai / perskaitoPerSavaite <= savaites){
    console.log('Jonas knygas perskaityti spės')
} else {
    console.log('Jonas knygų perskaityti nespės')
}

console.log('9 užduotis:');
const n1 = 1;
const n2 = 1;
const n3 = 1;
if (n1 == 1 && n2 == 1 && n3 == 1){
    console.log('Mokinys dešimtuką gaus.');
} else {
    console.log('Mokinys dešimtuko negaus.');
}

console.log('10 užduotis:');
const k = 500;
if (k >= 4000) {
    console.log('Jolantai geriausiai tiktų pirmos grupės kelionė.');
} else if (k < 4000 && k >= 3000) {
    console.log('Jolantai geriausiai tiktų antros grupės kelionė.');
} else if (k < 3000 && k >= 1000) {
    console.log('Jolantai geriausiai tiktų trečios grupės kelionė.');
} else {
    console.log('Jolantai geriausiai tiktų ketvirtos grupės kelionė.');
}
