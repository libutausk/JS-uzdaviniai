console.log('1 užduotis:');
const m1 = 9;
const m2 = 12;
const b = 3;

function suma(m1, m2, b) {
    console.log('Bagažo kg iš viso = ' + (m1 + m2) + ' kg.');
    console.log('Už bagažą draugai turės susimokėti = ' + ((m1 + m2) * b) + ' EUR.');
    console.log('Kiek kg bagažo draugai turėjo vidutiniškai = ' + (m1 + m2) / 2 + ' kg.');
    if (m1 && m2 > 10) {
        console.log(2 + '-jų stovyklautojų bagažas yra sunkesnis nei 10kg');
    } else if (m1 || m2 > 10) {
        console.log(1 + '-o stovyklautojo bagažas yra sunkesnis nei 10kg');
    } else {
        console.log('Nei vieno stovyklautojo bagažas nėra sunkesnis nei 10kg');
    }
}
suma(m1, m2, b);
console.log('1c užduotis:');
const array = [9, 10, 11, 12, 5, 4, 3];

function sumaNew(array, b) {
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 10) {
            counter++;
            sum += array[i];
            console.log('Mažesnio nei 10kg bagažų svoris: ' + array[i]);

        }

    }
    console.log(counter + ' stovyklautojų bagažo masė yra mažesnė nei 10kg. Šių bagažų kaina (vieno kg kaina 3eur) yra ' + sum * b + ' EUR.');
    console.log('Kiek kg bagažo draugai turėjo vidutiniškai = ' + sum / counter + ' kg.')
    console.log('Keli draugai turėjo mažiau bagažo nei 10kg = ' + counter)

}
sumaNew(array, b);

console.log('2 užduotis:');
const uzdaviniai = [9, 10, 11, 12, 5, 4, 3];

function uzdaviniaiFunkcija(uzdaviniai) {
    let uzdaviniuViso = 0;
    for (let i = 0; i < uzdaviniai.length; i++) {
        uzdaviniuViso += uzdaviniai[i];

    }
    console.log(uzdaviniai.length + ' programuotojai išsprendė ' + uzdaviniuViso + ' uždavinius.');
}
uzdaviniaiFunkcija(uzdaviniai);

console.log('3 užduotis:');
const m1n = 20;
const m2n = 30;
const m3n = 45;
const m4n = 55;
const array2 = [m1n, m2n, m3n, m4n];

function gydytojas(array2) {
    let laikoSuma = 0;
    let k = 0;
    for (let j = 0; j < array2.length; j++) {
        laikoSuma += array[j];
        if (array2[j] > 20) {
            k++;
        }
    }
    console.log('Vidutiniškai vienas vizitas trunka: ' + laikoSuma + ' minutes. ' + k + ' pacientų vizitai buvo ilgesni nei 20 minučių.');
}
gydytojas(array2);

console.log('4 užduotis:');
const keleiviaiArray = [20, 5, 9, 50, 15, 20];
const sugaistasLaikas = [115, 120, 110, 113, 115, 100];

function keleiviai(keleiviaiArray) {
    let kv = 0;
    let k = 0;
    for (let y = 0; y < keleiviaiArray.length; y++) {
        kv += keleiviaiArray[y];
        if (keleiviaiArray[y] < 10) {
            k++;
        }
    }
    console.log('Buvo pervežta ' + kv + ' keleviai/ių.');
    console.log(k + ' autobusuose važiavo mažiau nei 10 keleivių.')
}
keleiviai(keleiviaiArray);

function kelionesLaikas(sugaistasLaikas) {
    let laikas = 0;
    for (let x = 0; x < sugaistasLaikas.length; x++) {
        laikas += sugaistasLaikas[x];
    }
    console.log('Vidutiniškai vienas autobusas sugaišo: ' + (laikas / sugaistasLaikas.length).toFixed(0) + ' min.');
}
kelionesLaikas(sugaistasLaikas);

console.log('5 užduotis:');
const br = 4;
const d = 5;
const dienos = 3;

function braskes(br, d, dienos) {
    let braskesViso = 0;
    for (let u = 1; u <= dienos; u++) {
        for (let q = br; q <= br + d; q++) {
            q += d;
            braskesViso += q;
        }
    }
    console.log('Per ' + dienos + ' dienas pririnko ' + braskesViso + ' braškes.')
}
braskes(br, d, dienos);

console.log('6 užduotis:');
const ax = 5;
const bx = 24;

function ledai(ax, bx) {
    kiekLedu = 0;
    for (let x = ax; x <= bx; x++) {
        if (x % 6 == 0) {
            kiekLedu++;
        }
    }
    console.log('Reikalingas porcijų skaičius: ' + kiekLedu);
}
ledai(ax, bx);

console.log('7 užduotis:');
const skyriai = 17;
let dienosViso = 0;
for (let perDienaPerskaito = 0; perDienaPerskaito < skyriai; perDienaPerskaito++){
    perDienaPerskaito += perDienaPerskaito
    dienosViso++;
}
console.log('Tadas visą knygą perskaitys per ' + dienosViso + ' dienas. Per dieną vidutiniškai perskaitė ' + skyriai/dienosViso);