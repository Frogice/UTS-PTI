var belajar = document.getElementById("belajar");
var makan = document.getElementById("makan");
var sleep = document.getElementById("sleep");
var play = document.getElementById("play");
var xpbelajar = document.getElementById("xpbelajar");
var xpmakan = document.getElementById("xpmakan");
var xpsleep = document.getElementById("xpsleep");
var xpplay = document.getElementById("xpplay");




document.getElementById("plus").addEventListener("click", function() {
    var newbelajar = parseInt(belajar.getAttribute('belajar-value')) + 10;
    afterClick(newbelajar);
    var newplay = parseInt(play.getAttribute('play-value')) - 2;
    afterClick4(newplay);
    var newsleep = parseInt(sleep.getAttribute('sleep-value')) - 1;
    afterClick3(newsleep);
    var newmakan = parseInt(makan.getAttribute('makan-value')) - 2;
    afterClick2(newmakan);  
});

document.getElementById("plus2").addEventListener("click", function() {
    var newmakan = parseInt(makan.getAttribute('makan-value')) + 5;
    afterClick2(newmakan);
    var newsleep = parseInt(sleep.getAttribute('sleep-value')) - 2;
    afterClick3(newsleep);
});

document.getElementById("plus3").addEventListener("click", function() {
    var newsleep = parseInt(sleep.getAttribute('sleep-value')) + 5;
    afterClick3(newsleep);
    var newbelajar = parseInt(belajar.getAttribute('belajar-value')) - 1;
    afterClick(newbelajar);
});

document.getElementById("plus4").addEventListener("click", function() {
    var newplay = parseInt(play.getAttribute('play-value')) + 4;
    afterClick4(newplay);
    var newmakan = parseInt(makan.getAttribute('makan-value')) - 5;
    afterClick2(newmakan);
    var newsleep = parseInt(sleep.getAttribute('sleep-value')) - 3;
    afterClick3(newsleep);
    var newbelajar = parseInt(belajar.getAttribute('belajar-value')) - 1;
    afterClick(newbelajar);
});

function afterClick(newbelajar) {
    belajar.style.width = newbelajar + '%';
    belajar.setAttribute('belajar-value', newbelajar);
    xpbelajar.innerText = newbelajar + '%';
    if (newbelajar >= 100) {
        reset();
        alert("Kamu Naik Ke Semester Berikutnya ! , Boleh Main dulu <3");
    }else if(newbelajar <= 0){
        alert("Drop Out , Silakan Refresh Halaman Untuk Mulai Lagi");
    }
    
}

function afterClick2(newmakan) {
    makan.style.width = newmakan + '%';
    makan.setAttribute('makan-value', newmakan);
    xpmakan.innerText = newmakan + '%'
    if (newmakan >= 100) {
        resetEat();
        alert("Kamu Kebanyakan makan , tapi gapapa biar cepet lulus");
    }else if(newmakan <= 3){
        alert("Kamu Kelaparan ! , Makan Dulu");
    }
}

function afterClick3(newsleep) {
    sleep.style.width = newsleep + '%';
    sleep.setAttribute('sleep-value', newsleep);
    xpsleep.innerText = newsleep + '%'
    if (newsleep >= 100) {
        resetSleep();
        alert("Kamu Kebanyakan istirahat, Kapan Belajarnya nih ?");
    }else if(newsleep <= 5){
        alert("Kamu Ngantuk ! , Istirahat dulu");
    }
}

function afterClick4(newplay) {
    play.style.width = newplay + '%';
    play.setAttribute('play-value', newplay);
    xpplay.innerText = newplay + '%'
    
    if (newplay >= 100) {
        resetPlay();
        alert("Kamu Kebanyakan main , Awas lupa waktu !!!");
    }else if(newplay <= 5){
        alert("Main sebentar biar ga stress");
    }
}

function resetEat() {
    makan.style.width = '100%';
    makan.setAttribute('makan-value', 0);
    xpmakan.innerText = '100%';
    
}

function resetSleep() {
    sleep.style.width = '6%';
    sleep.setAttribute('sleep-value', 6);
    xpsleep.innerText = '6%';
}
function resetPlay() {
    play.style.width = '6%';
    play.setAttribute('play-value', 6);;
    xpplay.innerText = '6%';
    
}

function reset() {
    belajar.style.width = '6%';
    belajar.setAttribute('belajar-value', 0);
    semester.innerText ++  ;
    xpbelajar.innerText = '0%';
 
}
 
function salam() {
    alert("Choose Your Character");
  }
  
setInterval(()=>{
    const time = document.querySelector("#time");
    let date = new Date();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(seconds < 10){
      seconds = "0" + seconds;
    }

    if(minutes >= 24 && minutes < 48){
        minutes = minutes - 24;
    }
    if(minutes >= 48 && minutes <= 59){
        minutes = minutes - 48;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
      }
    time.textContent = minutes + ":" + seconds + " ";
  });

window.addEventListener('load', () => {
    const params =(new URL(document.location)).searchParams;
    const name = params.get('name');
    var myDate = new Date();
    var hrs = myDate.getMinutes();
    var greet;
    if(hrs >= 24 && hrs < 48){
        hrs = hrs - 24;
    }
    if(hrs >= 48 && hrs <= 59){
        hrs = hrs - 48;
    }
    if (hrs >= 6 && hrs <= 11)
        greet = '☀️ Good Morning';
    else if (hrs >= 12 && hrs <= 16)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 18)
        greet = 'Good Evening';
    else if (hrs >= 19 && hrs <= 24 || hrs >= 0 && hrs <=5)
        greet = '🌙 Good Night';

    document.getElementById('salam').innerHTML = '<b>' + greet + ' ' + name + '</b> !';
})

var background = new Date();
var hours = background.getMinutes();
var detik = background.getSeconds();

if(hours >= 24 && hours < 48){
    hours = hours - 24;
}
if(hours >= 48 && hours <= 59){
    hours = hours - 48;
}
if (hours >= 6 && hours <= 11) {//Morning
    document.write('<body style="background: #f2af83; background: -webkit-linear-gradient(to left, #7481cf, #f2af83); background: linear-gradient(to left, #7481cf, #f2af83); color: white">');
    
}
if (hours >= 12 && hours <= 16) {//Day
    document.write('<body style="background: #9be9fa ; background: -webkit-linear-gradient(to right, #31c5f7, #9be9fa ); background: linear-gradient(to right, #31c5f7, #9be9fa); color: white">');
    
}
if (hours >= 17 && hours <= 18) {//Evening
    document.write('<body style="background: #157ed6 ; background: -webkit-linear-gradient(to right, #ed98b0, #9973ba, #157ed6 ); background: linear-gradient(to right, #ed98b0, #9973ba, #157ed6);\n color: white">');
    
}
if (hours >= 19 && hours <= 24 || hours >= 0 && hours <=5) {//Night
    document.write('<body style="background: #141a2e; background: -webkit-linear-gradient(to right, #522569, #40365c, #141a2e);  background: linear-gradient(to right, #522569, #40365c, #141a2e); color : white">');
}

var elementSelected = null;
var typeSelected = false;

$(document).on('click', '.list-image > img', function(){
    $('.list-image > img').each(function(){
    $(this).removeClass('active');
    })
    $(this).addClass('active');
    elementSelected = $(this);
    typeSelected = false;
});

$(document).on('input', '#text-src', function(){
    $('.list-image > img').each(function(){
    $(this).removeClass('active');
    })
    elementSelected = $(this);
    typeSelected = true;
})

$(document).on('click', '#button-confirm', function(){
    $('.select-image').hide();
    if(typeSelected == true){
    $('.view-image > img').attr('src', elementSelected.val());
    }
    else{
    $('.view-image > img').attr('src', elementSelected.attr('src'));
    }
    $('.view-image').fadeIn('high');
})
