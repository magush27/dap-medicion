window.onload = function () {
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

//Rangos
const rango1_200 = document.getElementById('rango1-200');
const rango2_200 = document.getElementById('rango2-200');
const rango3_200 = document.getElementById('rango3-200');
const rango4_200 = document.getElementById('rango4-200');
const rango5_200 = document.getElementById('rango5-200');
const rango6_200 = document.getElementById('rango6-200');
const rango7_200 = document.getElementById('rango7-200');
const rango8_200 = document.getElementById('rango8-200');
const rango9_200 = document.getElementById('rango9-200');
const rango10_200 = document.getElementById('rango10-200');

const rango1_400 = document.getElementById('rango1-400');
const rango2_400 = document.getElementById('rango2-400');
const rango3_400 = document.getElementById('rango3-400');
const rango4_400 = document.getElementById('rango4-400');
const rango5_400 = document.getElementById('rango5-400');
const rango6_400 = document.getElementById('rango6-400');
const rango7_400 = document.getElementById('rango7-400');
const rango8_400 = document.getElementById('rango8-400');
const rango9_400 = document.getElementById('rango9-400');
const rango10_400 = document.getElementById('rango10-400');

const rango1_100 = document.getElementById('rango1-100');
const rango2_100 = document.getElementById('rango2-100');
const rango3_100 = document.getElementById('rango3-100');
const rango4_100 = document.getElementById('rango4-100');
const rango5_100 = document.getElementById('rango5-100');
const rango6_100 = document.getElementById('rango6-100');
const rango7_100 = document.getElementById('rango7-100');
const rango8_100 = document.getElementById('rango8-100');
const rango9_100 = document.getElementById('rango9-100');
const rango10_100 = document.getElementById('rango10-100');




// Get a canvas defined with ID "oscilloscope"
var canvas = document.getElementById("onda1");
var canvasCtx = canvas.getContext("2d");

var canvas2 = document.getElementById("onda2");
var canvasCtx2 = canvas2.getContext("2d");

var canvas3 = document.getElementById("onda3");
var canvasCtx3 = canvas3.getContext("2d");

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
    
        var barWidth = (WIDTH / bufferLength) * 1.5;
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
    
        var barWidth2 = (WIDTH2 / bufferLength2) * 1.5;
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
    
        var barWidth3 = (WIDTH3 / bufferLength3) * 1.5;
        var barHeight3;
        var x3 = 0;
        
    for(var i3 = 0; i3 < bufferLength3; i3++) {
        barHeight3 = dataArray3[i3]/2;

        canvasCtx3.fillStyle = 'rgb(' + (barHeight3+100) + ',50,50)';
        canvasCtx3.fillRect(x3,HEIGHT3-barHeight3/2,barWidth3,barHeight3);

        x3 += barWidth3 + 1;
      }
    };


// 200Hz osciladores
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

rango4_200.addEventListener('click', () => {

    
    var segundos_200_numero4 = Number(document.getElementById("seconds-200").value);
    console.log(segundos_200_numero4);

    oscillator.connect(analyser);
    oscillator.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(204, audioCtx.currentTime + segundos_200_numero4);// value in hertz
    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime + (segundos_200_numero4 * 2));// value in hertz
    oscillator.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_200_numero4 * 3));
});

rango5_200.addEventListener('click', () => {

    
    var segundos_200_numero5 = Number(document.getElementById("seconds-200").value);
    console.log(segundos_200_numero5);

    oscillator.connect(analyser);
    oscillator.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(205, audioCtx.currentTime + segundos_200_numero5);// value in hertz
    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime + (segundos_200_numero5 * 2));// value in hertz
    oscillator.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_200_numero5 * 3));
});

rango6_200.addEventListener('click', () => {
    
    var segundos_200_numero6 = Number(document.getElementById("seconds-200").value);
    console.log(segundos_200_numero6);

    oscillator.connect(analyser);
    oscillator.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(206, audioCtx.currentTime + segundos_200_numero6);// value in hertz
    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime + (segundos_200_numero6 * 2));// value in hertz
    oscillator.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_200_numero6 * 3));
});

rango7_200.addEventListener('click', () => {
    
    var segundos_200_numero7 = Number(document.getElementById("seconds-200").value);
    console.log(segundos_200_numero7);

    oscillator.connect(analyser);
    oscillator.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(207, audioCtx.currentTime + segundos_200_numero7);// value in hertz
    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime + (segundos_200_numero7 * 2));// value in hertz
    oscillator.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_200_numero7 * 3));
});

rango8_200.addEventListener('click', () => {
    
    var segundos_200_numero8 = Number(document.getElementById("seconds-200").value);
    console.log(segundos_200_numero8);

    oscillator.connect(analyser);
    oscillator.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(208, audioCtx.currentTime + segundos_200_numero8);// value in hertz
    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime + (segundos_200_numero8 * 2));// value in hertz
    oscillator.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_200_numero8 * 3));
});

rango9_200.addEventListener('click', () => {
    
    var segundos_200_numero9 = Number(document.getElementById("seconds-200").value);
    console.log(segundos_200_numero9);

    oscillator.connect(analyser);
    oscillator.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(209, audioCtx.currentTime + segundos_200_numero9);// value in hertz
    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime + (segundos_200_numero9 * 2));// value in hertz
    oscillator.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_200_numero9 * 3));
});

rango10_200.addEventListener('click', () => {
    
    var segundos_200_numero10 = Number(document.getElementById("seconds-200").value);
    console.log(segundos_200_numero10);

    oscillator.connect(analyser);
    oscillator.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(210, audioCtx.currentTime + segundos_200_numero10);// value in hertz
    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime + (segundos_200_numero10 * 2));// value in hertz
    oscillator.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_200_numero10 * 3));
});

// 4000Hz osciladores
rango1_400.addEventListener('click', () => {

    
    var segundos_400_numero = Number(document.getElementById("seconds-400").value);
    console.log(segundos_400_numero);

    oscillator2.connect(analyser2);
    oscillator2.connect(audioCtx.destination);

    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(4001, audioCtx.currentTime + segundos_400_numero);// value in hertz
    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime + (segundos_400_numero * 2));// value in hertz
    oscillator2.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_400_numero * 3));


});

rango2_400.addEventListener('click', () => {

    
    var segundos_400_numero2 = Number(document.getElementById("seconds-400").value);
    console.log(segundos_400_numero2);

    oscillator2.connect(analyser2);
    oscillator2.connect(audioCtx.destination);

    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(4002, audioCtx.currentTime + segundos_400_numero2);// value in hertz
    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime + (segundos_400_numero2 * 2));// value in hertz
    oscillator2.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_400_numero2 * 3));


});

rango3_400.addEventListener('click', () => {

    
    var segundos_400_numero3 = Number(document.getElementById("seconds-400").value);
    console.log(segundos_400_numero3);

    oscillator2.connect(analyser2);
    oscillator2.connect(audioCtx.destination);

    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(4003, audioCtx.currentTime + segundos_400_numero3);// value in hertz
    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime + (segundos_400_numero3 * 2));// value in hertz
    oscillator2.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_400_numero3 * 3));
});

rango4_400.addEventListener('click', () => {

    
    var segundos_400_numero4 = Number(document.getElementById("seconds-400").value);
    console.log(segundos_400_numero4);

    oscillator2.connect(analyser2);
    oscillator2.connect(audioCtx.destination);

    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(4004, audioCtx.currentTime + segundos_400_numero4);// value in hertz
    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime + (segundos_400_numero4 * 2));// value in hertz
    oscillator2.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_400_numero4 * 3));
});

rango5_400.addEventListener('click', () => {

    
    var segundos_400_numero5 = Number(document.getElementById("seconds-400").value);
    console.log(segundos_400_numero5);

    oscillator2.connect(analyser2);
    oscillator2.connect(audioCtx.destination);

    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(4005, audioCtx.currentTime + segundos_400_numero5);// value in hertz
    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime + (segundos_400_numero5 * 2));// value in hertz
    oscillator2.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_400_numero5 * 3));
});

rango6_400.addEventListener('click', () => {
    
    var segundos_400_numero6 = Number(document.getElementById("seconds-400").value);
    console.log(segundos_400_numero6);

    oscillator2.connect(analyser2);
    oscillator2.connect(audioCtx.destination);

    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(4006, audioCtx.currentTime + segundos_400_numero6);// value in hertz
    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime + (segundos_400_numero6 * 2));// value in hertz
    oscillator2.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_400_numero6 * 3));
});

rango7_400.addEventListener('click', () => {
    
    var segundos_400_numero7 = Number(document.getElementById("seconds-400").value);
    console.log(segundos_400_numero7);

    oscillator2.connect(analyser2);
    oscillator2.connect(audioCtx.destination);

    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(4007, audioCtx.currentTime + segundos_400_numero7);// value in hertz
    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime + (segundos_400_numero7 * 2));// value in hertz
    oscillator2.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_400_numero7 * 3));
});

rango8_400.addEventListener('click', () => {
    
    var segundos_400_numero8 = Number(document.getElementById("seconds-400").value);
    console.log(segundos_400_numero8);

    oscillator2.connect(analyser2);
    oscillator.connect(audioCtx.destination);

    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(4008, audioCtx.currentTime + segundos_400_numero8);// value in hertz
    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime + (segundos_400_numero8 * 2));// value in hertz
    oscillator2.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_400_numero8 * 3));
});

rango9_400.addEventListener('click', () => {
    
    var segundos_400_numero9 = Number(document.getElementById("seconds-400").value);
    console.log(segundos_400_numero9);

    oscillator2.connect(analyser2);
    oscillator2.connect(audioCtx.destination);

    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(4009, audioCtx.currentTime + segundos_400_numero9);// value in hertz
    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime + (segundos_400_numero9 * 2));// value in hertz
    oscillator2.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_400_numero9 * 3));
});

rango10_400.addEventListener('click', () => {
    
    var segundos_400_numero10 = Number(document.getElementById("seconds-400").value);
    console.log(segundos_400_numero10);

    oscillator2.connect(analyser2);
    oscillator2.connect(audioCtx.destination);

    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(4010, audioCtx.currentTime + segundos_400_numero10);// value in hertz
    oscillator2.frequency.setValueAtTime(4000, audioCtx.currentTime + (segundos_400_numero10 * 2));// value in hertz
    oscillator2.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_400_numero10 * 3));
});


// 10000Hz osciladores
rango1_100.addEventListener('click', () => {

    
    var segundos_100_numero = Number(document.getElementById("seconds-100").value);
    console.log(segundos_100_numero);

    oscillator3.connect(analyser3);
    oscillator3.connect(audioCtx.destination);

    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime);
    oscillator3.frequency.setValueAtTime(10001, audioCtx.currentTime + segundos_100_numero);// value in hertz
    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime + (segundos_100_numero * 2));// value in hertz
    oscillator3.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_100_numero * 3));


});

rango2_100.addEventListener('click', () => {

    
    var segundos_100_numero2 = Number(document.getElementById("seconds-100").value);
    console.log(segundos_100_numero2);

    oscillator3.connect(analyser3);
    oscillator3.connect(audioCtx.destination);

    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime);
    oscillator3.frequency.setValueAtTime(10002, audioCtx.currentTime + segundos_100_numero2);// value in hertz
    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime + (segundos_100_numero2 * 2));// value in hertz
    oscillator3.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_100_numero2 * 3));


});

rango3_100.addEventListener('click', () => {

    
    var segundos_100_numero3 = Number(document.getElementById("seconds-100").value);
    console.log(segundos_100_numero3);

    oscillator3.connect(analyser3);
    oscillator3.connect(audioCtx.destination);

    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime);
    oscillator3.frequency.setValueAtTime(10003, audioCtx.currentTime + segundos_100_numero3);// value in hertz
    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime + (segundos_100_numero3 * 2));// value in hertz
    oscillator3.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_100_numero3 * 3));
});

rango4_100.addEventListener('click', () => {

    
    var segundos_100_numero4 = Number(document.getElementById("seconds-100").value);
    console.log(segundos_100_numero4);

    oscillator3.connect(analyser3);
    oscillator3.connect(audioCtx.destination);

    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime);
    oscillator3.frequency.setValueAtTime(10004, audioCtx.currentTime + segundos_100_numero4);// value in hertz
    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime + (segundos_100_numero4 * 2));// value in hertz
    oscillator3.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_100_numero4 * 3));
});

rango5_100.addEventListener('click', () => {

    
    var segundos_100_numero5 = Number(document.getElementById("seconds-100").value);
    console.log(segundos_100_numero5);

    oscillator3.connect(analyser3);
    oscillator3.connect(audioCtx.destination);

    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime);
    oscillator3.frequency.setValueAtTime(10005, audioCtx.currentTime + segundos_100_numero5);// value in hertz
    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime + (segundos_100_numero5 * 2));// value in hertz
    oscillator3.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_100_numero5 * 3));
});

rango6_100.addEventListener('click', () => {
    
    var segundos_100_numero6 = Number(document.getElementById("seconds-100").value);
    console.log(segundos_100_numero6);

    oscillator3.connect(analyser3);
    oscillator3.connect(audioCtx.destination);

    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime);
    oscillator3.frequency.setValueAtTime(10006, audioCtx.currentTime + segundos_100_numero6);// value in hertz
    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime + (segundos_100_numero6 * 2));// value in hertz
    oscillator3.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_100_numero6 * 3));
});

rango7_100.addEventListener('click', () => {
    
    var segundos_100_numero7 = Number(document.getElementById("seconds-100").value);
    console.log(segundos_100_numero7);

    oscillator3.connect(analyser3);
    oscillator3.connect(audioCtx.destination);

    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime);
    oscillator3.frequency.setValueAtTime(10007, audioCtx.currentTime + segundos_100_numero7);// value in hertz
    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime + (segundos_100_numero7 * 2));// value in hertz
    oscillator3.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_100_numero7 * 3));
});

rango8_100.addEventListener('click', () => {
    
    var segundos_100_numero8 = Number(document.getElementById("seconds-100").value);
    console.log(segundos_100_numero8);

    oscillator3.connect(analyser3);
    oscillator3.connect(audioCtx.destination);

    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime);
    oscillator3.frequency.setValueAtTime(10008, audioCtx.currentTime + segundos_100_numero8);// value in hertz
    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime + (segundos_100_numero8 * 2));// value in hertz
    oscillator3.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_100_numero8 * 3));
});

rango9_100.addEventListener('click', () => {
    
    var segundos_100_numero9 = Number(document.getElementById("seconds-100").value);
    console.log(segundos_100_numero9);

    oscillator3.connect(analyser3);
    oscillator3.connect(audioCtx.destination);

    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime);
    oscillator3.frequency.setValueAtTime(10009, audioCtx.currentTime + segundos_100_numero9);// value in hertz
    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime + (segundos_100_numero9 * 2));// value in hertz
    oscillator3.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_100_numero9 * 3));
});

rango10_100.addEventListener('click', () => {
    
    var segundos_100_numero10 = Number(document.getElementById("seconds-100").value);
    console.log(segundos_100_numero10);

    oscillator3.connect(analyser3);
    oscillator3.connect(audioCtx.destination);

    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime);
    oscillator3.frequency.setValueAtTime(10010, audioCtx.currentTime + segundos_100_numero10);// value in hertz
    oscillator3.frequency.setValueAtTime(10000, audioCtx.currentTime + (segundos_100_numero10 * 2));// value in hertz
    oscillator3.frequency.setValueAtTime(0, audioCtx.currentTime + (segundos_100_numero10 * 3));
});




