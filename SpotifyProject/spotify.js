// Now lets atart the code of js
console.log('Welcome to Spotify');
let songIndex=0;
let audioElement=new Audio('song/Let Me Down Slowly_128-(PagalWorld.Ink).mp3');
let play_Btn=document.getElementById('play_Btn');
let mySpeedBar=document.getElementById('speed-bar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName')
let songItem=Array.from(document.getElementsByClassName('songlist'));


let songs=[
    {songName:"Let Me Down Slowly.mp3",filePath:"C:\Complete Web Development\Web_d_Project\SpotifyProject\song\Let Me Down Slowly_128-(PagalWorld.Ink).mp3",coverPath:"cover_img8.jpg"},

    {songName:"Shamat-Aayi-Hai.mp3",filePath:"C:\Complete Web Development\Web_d_Project\SpotifyProject\Shamat-Aayi-Hai_320(PaglaSongs).mp3",coverPath:"cover_img1.jpg"},

    {songName:"Alone-Alan-Walkar.mp3",filePath:"C:\Complete Web Development\Web_d_Project\SpotifyProject\Alone-Alan-Walkar(PagalWorlld.Com).mp3",coverPath:"cover_img2.jpg"},

    {songName:"Believer---Imagine-Dragons.mp3",filePath:"C:\Complete Web Development\Web_d_Project\SpotifyProject\Believer---Imagine-Dragons-(PagalWorlld.Com).mp3",coverPath:"cover_img3.jpg"},

    {songName:"Don't-Be-The-One.mp3",filePath:"C:\Complete Web Development\Web_d_Project\SpotifyProject\Don't-Be-The-One(PagalWorlld.Com).mp3",coverPath:"cover_img4.jpeg"},

    {songName:"Haye-Ve-Tu-Kinna-Sohn.mp3",filePath:"C:\Complete Web Development\Web_d_Project\SpotifyProject\Haye-Ve-Tu-Kinna-Sohna-Aaja-Teri-Nazar-Utara(PagalWorlld.Com).mp3",coverPath:"cover_img5.jpg"},

    {songName:"Hold-Me.mp3",filePath:"C:\Complete Web Development\Web_d_Project\SpotifyProject\Hold-Me(PagalWorlld.Com).mp3",coverPath:"cover_img6.jpg"},

    {songName:"Industry-Baby-(Slowed-And-Reverb)(.mp3",filePath:"C:\Complete Web Development\Web_d_Project\SpotifyProject\Industry-Baby-(Slowed-And-Reverb)(PagalWorlld.Com).mp3",coverPath:"cover_img7.jpg"},

    {songName:"Try-Me.mp3",filePath:"C:\Complete Web Development\Web_d_Project\SpotifyProject\Try-Me(PagalWorlld.Com).mp3",coverPath:"cover_img9.jpg"},
]
songItem.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
play_Btn.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play_Btn.classList.remove('fa-play-circle');
        play_Btn.classList.add('fa-pause-circle');
        gif.style.opacity=1;}
    else{
        audioElement.pause();
        play_Btn.classList.remove('fa-pause-circle');
        play_Btn.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    speed=parseInt((audioElement.currentTime/audioElement.duration)*100);
    mySpeedBar.value=speed;

})
mySpeedBar.addEventListener('change', ()=>{
    audioElement.currentTime=mySpeedBar.value*audioElement.duration/100;
})
const AllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        AllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${songIndex+1}`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        play_Btn.classList.remove('fa-play-circle');
        play_Btn.classList.add('fa-pause-circle');
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`${songIndex+1}`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    play_Btn.classList.remove('fa-play-circle');
    play_Btn.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`${songIndex+1}`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    play_Btn.classList.remove('fa-play-circle');
    play_Btn.classList.add('fa-pause-circle');
})
