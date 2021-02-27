console.log('CIKLAS FOR:');
console.log('1 uždavinys');
const n = 4;
const t = [15, 12, 13, 20];
let viso = 0;
for(let i = 0; i < t.length; i++){
    viso += t[i];
}
console.log('Per ' + n + ' dienas katinas buvo dresuojamas ' + viso + ' min. Per dieną vidutiniškai ' +  viso/n + ' min.');

console.log('2 uždavinys');
const b = 4;
const d = 5;
const dienos = 3;
let braskesViso = 0;
    for (let u = 1; u <= dienos; u++) {
        for (let q = b; q <= b + d; q++) {
            q += d;
            braskesViso += q;
        }
    }
    console.log('Per ' + dienos + ' dienas pririnko ' + braskesViso + ' braškes.')

console.log('3 uždavinys');
const pradineKaina = 100;
const lt = [5, 7, 5, 5];
let ltSuma = 0;
for (let y = 0; y < lt.length; y++){
    ltSuma += lt[y];
}
console.log('Galutinė prekės kaina ' + (pradineKaina+ltSuma));

console.log('4 uždavinys');
const sk = 28;
let store = 0;
for (let g = 1; g < sk; g++){
    if (sk % g == 0){
        store += g;  
    }
}
if (store == sk){
    console.log('Skaičius ' + sk + ' yra tobulas.');
}
    else {
        console.log('Skaičius ' + sk + ' nėra tobulas.');
    }

console.log('5 uždavinys');
const num = 5;
let number = 7;
let numberSum = 0;
for (let b = 1; b <= num; b++){
    number = number * 10 + 7;  //KAIP PARASYTI PIRMAJI SKAITMENI?
    console.log(number);
    numberSum += number;
}
console.log('Suma:' + numberSum);

console.log('CIKLAS WHILE:');
console.log('1 uždavinys');
const m1 = 3;
const n1 = 5;
let bmk = 0;
  while(true) {
      ++bmk;
      if (bmk % n1 == 0 && bmk % m1 == 0) {
          console.log('Skaičių 3 ir 5 BMK yra: ' + bmk);
          break;
      } 
  }

console.log('2 uždavinys');
const atlyginimas = 1000;
let atlyginimasNew = 1000;
let atlyginimasNew2 = 1000;
const priedas = 50;
let incr = 0;
console.log('Pradinis atlyginimas 1000 eur., jį kas mėnesį padidinsime po 50 eur.')
while (true) {
    incr++;
    atlyginimasNew += priedas;
    atlyginimasNew2 += priedas;
    if(incr == 3) {
        console.log('Atlyginimas po 3 mėnesių bus: ' + atlyginimasNew);
        continue;
    }
    else if(incr == 12) {
        console.log('Atlyginimas po 12 mėnesių bus: ' + atlyginimasNew2);
        continue;
    }
    else if(atlyginimasNew == atlyginimas*2) {
        console.log('Atlyginimas bus dvigubai didesnis po: ' + incr + ' mėnesių.');
        continue;
    }
    else if(atlyginimasNew >= 4000) {
        console.log('Atlyginimas bus ne mažesnis nei 4000 eur po: ' + incr + ' mėnesių.');
        break;
    } 
}

//let atlyginimasObject = {
//    let alga: atlyginimasNew,
//    let alga2: atlyginimasNew2
//    
//};

console.log('3 uždavinys');
let numberX = 1234;
let rev = 0;
while (numberX > 0){
    console.log(numberX);
    rev *= 10;
    rev += numberX % 10;
    numberX -= numberX % 10;
    numberX /= 10;
}
console.log(rev);

console.log('4 uždavinys');
let numberY = 21;
let reminder = 0;
let iteration = 0;
    console.log('Duotas natūralusis skaičius: ' + numberY);
while (iteration < numberY) {
    iteration++;
    console.log(iteration);
    reminder += iteration;
    if (reminder >= numberY) {
        console.log('Natūraliųjų skaičių suma yra lygi: ' + reminder);
        break;
    }  
}

console.log('5 uždavinys');
let numberR = 3;
let numberE = 7;
let iterarionB = 1;
while (iterarionB < numberE){
    iterarionB++;
    if (numberR % iterarionB == 0 && numberE % iterarionB == 0){
        console.log('Skaičiai ' + numberR + ' ir ' + numberE + ' yra sudėtiniai.')
        break;
    } else if (numberR % iterarionB != 0 && numberE % iterarionB != 0) {
        console.log('Skaičiai ' + numberR + ' ir ' + numberE + ' yra pirminiai.')
    }
}

console.log('6 uždavinys');
let ourNumber = 24;
let interationY = 1;
console.log('Duotasis skaičius ' + ourNumber);
while (true){
    interationY++;
 if (ourNumber % interationY == 0) { 
     ourNumber /= interationY; 
 } else { 
    break;
 }
    }
    if (ourNumber == 1){
        console.log('Skaičius turi faktorialą.');
    } else {
        console.log('Skaičius neturi faktorialo.');
    }

console.log('CIKLAS + MASYVAI:');
console.log('1 uždavinys');
const apskritimai = [5, 10, 8, 10, 12, 4, 3, 12, 12, 8];
let kiekApskritimu = 0;
apskritimai.sort(function(a, b){return a - b}); //Išrikiuojam pagal didėjimą
for (let ix = 0; ix < apskritimai.length; ix++){
    if (apskritimai[ix] == apskritimai[apskritimai.length-1]){ //Tikrinam kiek yra tokių pačių skaitmenų kaip didžiausias paskutinysis
        kiekApskritimu++;
    } 
}
console.log(apskritimai);
console.log('Didžiausių apskritimų yra: ' + kiekApskritimu);

console.log('2 uždavinys');
const indeliai = [1000, 985, 930, 1500, 11000, 12000, 5000, 2356];
console.log('Visi indėliai ' + indeliai);
let indeliaiNew = indeliai.filter(atlyginimoFunkcija);
console.log('Indėliai didesni nei 1000 eur: ' + indeliaiNew + '. Indėlių didesnų nei 1000 eur skaičius: ' + indeliaiNew.length);
function atlyginimoFunkcija(value, index, array) {
    return value > 1000;
} 

console.log('3 uždavinys');
const nelankantys = [5, 6, 7, 8, 8, 7, 6, 6, 5, 4, 11, 20, 30, 18, 19];
console.log(nelankantys.sort(function(a, b){return a - b}));

console.log('4 uždavinys');
const skyriai = [3, 10, 20, 30, 17, 23, 25, 4, 56, 88];
//console.log(skyriai);
//// 1 bandymas
//for (let xi = 0; xi < skyriai.length; xi++){ 
//     xi = 2;
//    skyriai[xi] += xi;       
//}
//console.log(skyriai);
// 2 bandymas
//console.log(skyriai.map(skyriuFunkcija));
//function skyriuFunkcija(value, index, skyriai){
//        return value+index;
//    if (index % 2 == 0) {
//    return value+index;
//    }   
//}
// 3 bandymas
//for (let xi = 0; xi < skyriai.length; xi++){ 
//    if (xi % 2 == 0) {
//       return skyriai[xi]+xi;       
//    }
//}

console.log('5 uždavinys');
//let dalykuPazymiai = [
//    ['Pirmas mokinys', 9, 10, 8, 9, 10, 5],
//    ['Antras mokinys', 10, 5, 6, 6, 7, 8],
//    ['Trecias mokinys', 9, 9, 9, 9, 8, 7],
//    ['Ketvirtas mokinys', 9, 8, 8, 7, 8, 9],
//    ['Penktas mokinys', 7, 2, 2, 4, 2, 3]
//];
//console.table(dalykuPazymiai);
//
//    let sumArray = 0;
//  for (let z = 0; z < dalykuPazymiai.length; z++){
//      for (let q = 1; q < dalykuPazymiai[q].length; q++){
//          sumArray += dalykuPazymiai[z][z];
//          
//      }
//  }
//     console.log(sumArray);     
//let dalykiuPazymiuVidurkiai = dalykuPazymiai.map(pazymiuFunkcija);
//
//function pazymiuFunkcija(array) {
//
//  }
//}
