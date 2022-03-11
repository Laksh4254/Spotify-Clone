// console.log("Welcome to spotify clone");
// let Songindex = 0;
// let audioElement = new Audio('songs/1.mp3');
// audioElement.play();
// let masterPlay = document.getElementById('masterPlay');
// let ProgressBar = document.getElemenById('ProgressBar');
 //let gif = document.getElementById('gif');
  
 

// masterPlay.addEventListener('click', () => {
//   if (audioElement.paused || audioElement.currentTime <= 0) {
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//   }
//    else {
//      audioElement.pause();
//      masterPlay.classList.remove('fa-pause-circle');
//      masterPlay.classList.add('fa-play-circle');
//      gif.style.opacity = 1;
//    }
//  })
// audioElement.addEventListener('timeupdate', () => {
//   //console.log('timeupdate');
  
//   //  console.log(progress);
//   ProgressBar.value = progress;
// })

//   const makeAllPlays = ()=>{ 
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//       element.classList.add('fa-play -circle');
//       element.classList.add('fa-play -circle'); 
//     })
//   }

//   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//     console.log(e.target);
//     makeAllPlays();
//     e.target.classList.remove('fa-play-circle');
//     e.target.classList.add('fa-pause-circle');
//     audioElement.src =songs/3.mp3;
//     audioElement.currentTime =0;
//     audioElement.play();
//     })

    
//   }) 
   console.log("Welcome to spotify clone");
   let songIndex = 0;
   let audioElement = new Audio('songs/1.mp3');
   // audioElement.play();
   let masterPlay = document.getElementById('masterPlay');
   let ProgressBar = document.getElementById('ProgressBar'); 
   let gif = document.getElementById('gif');
   let mastersongName = document.getElementById('mastersongName');
   let songItems= Array.from( document.getElementsByClassName('songItems')); 
   let Songs = [
    { SongName: "Devo Ke Dev O Mahadev", filePath: "songs/1.mp3", coversPath: "covers/1.jpg" },
    { SongName: "Dishkiyyaoon", filePath: "songs/2.mp3", coversPath: "covers/2.jpg" },
    { SongName: "Excuses", filePath: "songs/3.mp3", coversPath: "covers/3.jpg" },
    { SongName: "Father Saab", filePath: "Songs/4.mp3", coversPath: "covers/4.jpg" },
    { SongName: "Insaan", filePath: "songs/5.mp3", coversPath: "covers/5.jpg" },
    { SongName: "Kale Je Libaas Di", filePath: "songs/6.mp3", coversPath: "covers/6.jpg" },
    { SongName: "Meri Aashiqui", filePath: "songs/7.mp3", coversPath: "covers/7.jpg" },
     { SongName: "3-peg", filePath: "songs/8.mp3", coversPath: "covers/8.jpg" },
     { SongName: "Dil Ke Pass", filePath: "songs/9.mp3", coversPath: "covers/9.jpg" },
     { SongName: "Punjabiyan Di Dhee", filePath: "songs/10.mp3", coversPath: "covers/10.jpg" },
  ]
 songItems.forEach((element,i)=>{
   console.log(element,i);
    element.getElementsByTagName("img")[0].src=Songs[i].coversPath; 
    element.getElementsByClassName("songName")[0].innerText=Songs[i].SongName; 
  } ) 
 
 masterPlay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     gif.style.opacity = 1;
   }
   else{
     audioElement.pause();
     masterPlay.classList.remove('fa-pause-circle');
     masterPlay.classList.add('fa-play-circle');
     gif.style.opacity = 0;

   }
 })   
  audioElement.addEventListener('timeupdate',()=>{
     progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
     ProgressBar.value = progress; 
   } )
   ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration/100;  
    }) 
    const makeAllPlays =()=>{
      Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
      })
    }

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.addEventListener('click',(e)=>{
      makeAllPlays();n
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex+1}.mp3`;
      mastersongName.innerText =Songs[songIndex].SongName;
      audioElement.currentTime=0; 
      audioElement.play();
      gif.style.opacity=1;
      masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
      
      })
      
    
    })
    document.getElementById('next').addEventListener('click',()=>{
      if(songIndex>=9){
        songIndex =0;
      }
      else{
        songIndex +=1;  
      }

      audioElement.src = `songs/${songIndex+1}.mp3`;
      mastersongName.innerText =Songs[songIndex].SongName;
      audioElement.currentTime=0; 
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
      
    }) 

    document.getElementById('previous').addEventListener('click',()=>{
      if(songIndex<=0){
        songIndex =0; 
      }
      else{
        songIndex +=1;  
      }
      audioElement.src = `songs/${songIndex+1}.mp3`;
      mastersongName.innerText =Songs[songIndex].SongName;
      audioElement.currentTime=0; 
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      
    })  