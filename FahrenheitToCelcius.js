function kalkulator() {
    const inputAngka = parseFloat(document.getElementById('temp').value);


    let convertTemperature;

    if (inputAngka){
        convertTemperature = (inputAngka - 32) * 9 / 5;
        document.getElementById('result').textContent = `${inputAngka} fahrenheit = ${convertTemperature} celcius`
    } else{
        document.getElementById('result').textContent = 'Tolong masukkan angka yang benar'
    }
}