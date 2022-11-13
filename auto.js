var auto=document.querySelector('.auto');
var playlistname=document.querySelector('.playlist-name .name');
var playlistartist=document.querySelector('.playlist-name .artist');
var playlistimg=document.querySelector('.playlist-img img')
var playlistaudio=document.getElementById('main-audio');
var playpause=document.querySelector('.play-pause');
var playicon=document.querySelector('.play-pause #play-pause');
var maxduration=document.querySelector('.song-timer .max-duration');
var currenttime=document.querySelector('.song-timer .current-time');
var progressbar=document.querySelector('.progress-bar')
var previousbtn=document.querySelector('#backward-step');
var nextbtn=document.querySelector('#forward-step');
var repeatbtn=document.querySelector('#repeat');

// var pauseicon=document.querySelector('.play-pause #pause-play')
console.log(previousbtn)
console.log(nextbtn)
console.log(repeatbtn)
let musicIndex=0;

window.addEventListener('load',function (){
   load(musicIndex);
})

function load(numb){
    playlistname.innerHTML=allmusic[numb].name;
    playlistartist.innerHTML=allmusic[numb].artist;
    playlistimg.src=`audio images/${allmusic[numb].img}.jpg`;
    playlistaudio.src=`audio/${allmusic[numb].audio}.mp3`;

}
playpause.addEventListener('click',function (){
    play();
})

function play(){
    if(playlistaudio.paused){
      playlistaudio.play();
        playicon.className="fa-solid fa-pause";
    }
    else{
        playlistaudio.pause();
        playicon.className="fa-solid fa-play";
 
    }
}
playlistaudio.addEventListener('timeupdate', function(e){
    let currentTimes=e.target.currentTime/60;
   currenttime.innerHTML=currentTimes.toFixed(2);
    var durations=(e.target.duration/60);
    let progresswidth=(currentTimes/durations)*100;
    progressbar.style.width=`${progresswidth}%`;
    maxduration.innerHTML=(durations.toFixed(2)- currenttime.innerHTML).toFixed(2);
     if(currentTimes===durations){
        playlistaudio.pause();
        playicon.className="fa-solid fa-play";
    }
   

})

nextbtn.addEventListener('click',function (){
    nextbtns();
    playlistaudio.pause();
    playicon.className="fa-solid fa-play";
    playlistaudio.loop=false;

})
previousbtn.addEventListener('click',function (){
    previousbtns();
    playlistaudio.pause();
    playicon.className="fa-solid fa-play";
    playlistaudio.loop=false;

})
function nextbtns(){
    musicIndex++;


    if(musicIndex>allmusic.length-1){
        musicIndex=0;
    }
        load(musicIndex);
    
    
}
function previousbtns(){
    console.log(musicIndex)
    if(musicIndex<1){
        musicIndex=allmusic.length;
    }
    musicIndex--; 
        load(musicIndex);
         
}
var clicks=1;

repeatbtn.addEventListener('click',function(){

    // console.log(clicks)
    // if(clicks%2==0){
    //     document.getElementById('repeat').classList.remove("show");
    //     playlistaudio.loop=false;

    // }
    // document.getElementById('repeat').classList.add("show");
    // clicks++;


    repeats();
})
function repeats(){
    // if (typeof playlistaudio.loop == 'boolean')
    // {
    //     playlistaudio.loop = true;
    // }
    // else
    // {
    //     playlistaudio.addEventListener('ended', function() {
    //         this.currentTime = 0;
    //         this.play();
    //     }, false);
    // }
    playlistaudio.loop=true;
}

