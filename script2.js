var numeroDeSuma = Number(document.getElementById("input1").value);
var numeroDeSuma2 = Number(document.getElementById("input2").value);
var numeroDeSuma3 = Number(document.getElementById("input3").value);



//funcion que pone los valores sin cambios
function todoACero() {
    numeroDeSuma = 200;
    numeroDeSuma2 = 4000;
    numeroDeSuma3 = 10000;
}


window.onload = function () {
    todoACero();
    draw();
    draw2();
    draw3();
}



// create web audio api context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

//crea analizador de forma de onda
var analyser = audioCtx.createAnalyser();
analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

//crea analizador de forma de onda 2
var analyser2 = audioCtx.createAnalyser();
analyser2.fftSize = 256;
var bufferLength2 = analyser2.frequencyBinCount;
var dataArray2 = new Uint8Array(bufferLength2);
analyser2.getByteTimeDomainData(dataArray2);

//crea analizador de forma de onda 3
var analyser3 = audioCtx.createAnalyser();
analyser3.fftSize = 256;
var bufferLength3 = analyser3.frequencyBinCount;
var dataArray3 = new Uint8Array(bufferLength3);
analyser3.getByteTimeDomainData(dataArray3);


// create Oscillator node
const oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.start();

// create Oscillator node 2
const oscillator2 = audioCtx.createOscillator();
oscillator2.type = 'sine';
oscillator2.start();

// create Oscillator node 3
const oscillator3 = audioCtx.createOscillator();
oscillator3.type = 'sine';
oscillator3.start();


//Elementos de pausa
function stopElement() {
    oscillator.disconnect(audioCtx.destination);
    oscillator.disconnect(analyser);

}

function stopElement2() {
    oscillator2.disconnect(audioCtx.destination);
    oscillator2.disconnect(analyser2);

}
function stopElement3() {
    oscillator3.disconnect(audioCtx.destination);
    oscillator3.disconnect(analyser3);

}

//Boton 1 200Hz
const boton1 = document.getElementById('boton1');
const boton_1 = document.getElementById('boton-1');
const play1 = document.getElementById('play1');

//Rangos
const rango1_200 = document.getElementById('rango1-200');
const rango2_200 = document.getElementById('rango2-200');
const rango3_200 = document.getElementById('rango3-200');

//const play1 = document.getElementById('play1');

const boton2 = document.getElementById('boton2');
const boton_2 = document.getElementById('boton-2');
const play2 = document.getElementById('play2');

const boton3 = document.getElementById('boton3');
const boton_3 = document.getElementById('boton-3');
const play3 = document.getElementById('play3');


// Get a canvas defined with ID "oscilloscope"
var canvas = document.getElementById("onda1");
var canvasCtx = canvas.getContext("2d");

var canvas2 = document.getElementById("onda2");
var canvasCtx2 = canvas2.getContext("2d");

var canvas3 = document.getElementById("onda3");
var canvasCtx3 = canvas2.getContext("2d");

var WIDTH = canvas.width;
var HEIGHT = canvas.height;
var WIDTH2 = canvas2.width;
var HEIGHT2 = canvas2.height;
var WIDTH3 = canvas3.width;
var HEIGHT3 = canvas3.height;

    function draw() {
      drawVisual = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
    
        var barWidth = (WIDTH / bufferLength) * 2.5;
        var barHeight;
        var x = 0;
        
    for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]/2;

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight);

        x += barWidth + 1;
      }
};
    
function draw2() {
      drawVisual2 = requestAnimationFrame(draw2);

      analyser2.getByteFrequencyData(dataArray2);

      canvasCtx2.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx2.fillRect(0, 0, WIDTH2, HEIGHT2);
    
        var barWidth2 = (WIDTH2 / bufferLength2) * 2.5;
        var barHeight2;
        var x2 = 0;
        
    for(var i2 = 0; i2 < bufferLength2; i2++) {
        barHeight2 = dataArray2[i2]/2;

        canvasCtx2.fillStyle = 'rgb(' + (barHeight2+100) + ',50,50)';
        canvasCtx2.fillRect(x2,HEIGHT2-barHeight2/2,barWidth2,barHeight2);

        x2 += barWidth2 + 1;
      }
};
    
function draw3() {
      drawVisual3 = requestAnimationFrame(draw3);

      analyser3.getByteFrequencyData(dataArray3);

      canvasCtx3.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx3.fillRect(0, 0, WIDTH3, HEIGHT3);
    
        var barWidth3 = (WIDTH3 / bufferLength3) * 2.5;
        var barHeight3;
        var x3 = 0;
        
    for(var i3 = 0; i3 < bufferLength3; i3++) {
        barHeight3 = dataArray3[i3]/2;

        canvasCtx3.fillStyle = 'rgb(' + (barHeight3+100) + ',50,50)';
        canvasCtx3.fillRect(x3,HEIGHT3-barHeight3/2,barWidth3,barHeight3);

        x3 += barWidth3 + 1;
      }
    };



rango1_200.addEventListener('click', () => {

    
    var segundos_200_numero = Number(document.getElementById("seconds-200").value);
    console.log(segundos_200_numero);

    oscillator.connect(analyser);
    oscillator.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(201, audioCtx.currentTime + segundos_200_numero);// value in hertz
    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime + (segundos_200_numero * 2));// value in hertz
    oscillator.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_200_numero * 3));


});

rango2_200.addEventListener('click', () => {

    
    var segundos_200_numero2 = Number(document.getElementById("seconds-200").value);
    console.log(segundos_200_numero2);

    oscillator.connect(analyser);
    oscillator.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(202, audioCtx.currentTime + segundos_200_numero2);// value in hertz
    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime + (segundos_200_numero2 * 2));// value in hertz
    oscillator.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_200_numero2 * 3));


});

rango3_200.addEventListener('click', () => {

    
    var segundos_200_numero3 = Number(document.getElementById("seconds-200").value);
    console.log(segundos_200_numero3);

    oscillator.connect(analyser);
    oscillator.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(203, audioCtx.currentTime + segundos_200_numero3);// value in hertz
    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime + (segundos_200_numero3 * 2));// value in hertz
    oscillator.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_200_numero3 * 3));
});

boton1.addEventListener('click', () => {
    
    numeroDeSuma = numeroDeSuma + 1;
    document.getElementById("input1").value = numeroDeSuma;
    console.log(numeroDeSuma);    
    oscillator.frequency.setValueAtTime(numeroDeSuma, audioCtx.currentTime); // value in hertz
    console.log("hola");
});

boton_1.addEventListener('click', () => {
    
    numeroDeSuma = numeroDeSuma - 1;
    document.getElementById("input1").value = numeroDeSuma;
    console.log(numeroDeSuma);    
    oscillator.frequency.setValueAtTime(numeroDeSuma, audioCtx.currentTime); // value in hertz
    console.log("hola");
});

play1.addEventListener('click', () => {
        
    oscillator.connect(analyser);
    oscillator.connect(audioCtx.destination);
    oscillator.frequency.setValueAtTime(numeroDeSuma, audioCtx.currentTime); // value in hertz
    draw();
});

boton2.addEventListener('click', () => {
    
    numeroDeSuma2 = numeroDeSuma2 + 1;
    document.getElementById("input2").value = numeroDeSuma2;
    console.log(numeroDeSuma2);    
    oscillator2.frequency.setValueAtTime(numeroDeSuma2, audioCtx.currentTime); // value in hertz
});

boton_2.addEventListener('click', () => {
    
    numeroDeSuma2 = numeroDeSuma2 - 1;
    document.getElementById("input2").value = numeroDeSuma2;
    console.log(numeroDeSuma2);    
    oscillator2.frequency.setValueAtTime(numeroDeSuma2, audioCtx.currentTime); // value in hertz
});

play2.addEventListener('click', () => {
        
    oscillator2.connect(analyser2);
    oscillator2.connect(audioCtx.destination);
    oscillator2.frequency.setValueAtTime(numeroDeSuma2, audioCtx.currentTime); // value in hertz
    draw2();
});

boton3.addEventListener('click', () => {
    
    numeroDeSuma3 = numeroDeSuma3 + 1;
    document.getElementById("input3").value = numeroDeSuma3;
    console.log(numeroDeSuma3);    
    oscillator3.frequency.setValueAtTime(numeroDeSuma3, audioCtx.currentTime); // value in hertz
});

boton_3.addEventListener('click', () => {
    
    numeroDeSuma3 = numeroDeSuma3 - 1;
    document.getElementById("input3").value = numeroDeSuma3;
    console.log(numeroDeSuma3);    
    oscillator3.frequency.setValueAtTime(numeroDeSuma3, audioCtx.currentTime); // value in hertz
});

play3.addEventListener('click', () => {
        
    oscillator3.connect(analyser3);
    oscillator3.connect(audioCtx.destination);
    oscillator3.frequency.setValueAtTime(numeroDeSuma3, audioCtx.currentTime); // value in hertz
    draw3();
});





