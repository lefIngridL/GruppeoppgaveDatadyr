// Model
const room = document.getElementById('room');
const body = document.body;


//const app = document.getElementById('app');
var hungerOutPut='fornøyd';
var sleepOutPut='uthvilt';
var healthOutPut='Hygger meg';



// Datadyr bilder og rom bilder lagret i array
const dogEmotions = [{
    dogHappy: "https://media.discordapp.net/attachments/1135482561435541525/1146369434118795304/dogHappy-removebg-preview.png?width=335&height=473",
    dogSad: "https://media.discordapp.net/attachments/1135482561435541525/1146369317357752431/dogSadness-removebg-preview.png?width=362&height=473",
    dogSleepy: "https://cdn.discordapp.com/attachments/1135482561435541525/1146372726806822942/dogBored-removebg-preview.png",
    dogAngry: "https://media.discordapp.net/attachments/1135482561435541525/1146369435729395744/dogAngry-removebg-preview_1.png?width=377&height=473",
    dogBored: "https://cdn.discordapp.com/attachments/1135482561435541525/1146372726806822942/dogBored-removebg-preview.png",
    dogLove: "https://media.discordapp.net/attachments/1135482561435541525/1146369318267932713/dogLove-removebg-preview.png?width=413&height=473",
    dogHungry: "https://media.discordapp.net/attachments/1135482561435541525/1146369318800592998/dogInterest-removebg-preview.png?width=442&height=473",
    dogCrying: "https://media.discordapp.net/attachments/1135482561435541525/1146369435490324581/dogCrying___Kopi-removebg-preview.png?width=405&height=473",
    dogInsult: "https://media.discordapp.net/attachments/1135482561435541525/1146369433850347540/dogInsult-removebg-preview.png?width=377&height=473",
    dogDead: "https://cdn.discordapp.com/attachments/1135482561435541525/1147421234154450944/FAILUREskilt-removebg-preview.png"
}];

const gameRooms = [{
    soveRomDag: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357216241258587/soveromLys.PNG")',
    soveRomNatt: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357217088507964/soveromNatt.PNG")',
    kjøkken: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357215469502474/bc582639a9c071fadf82a2f2b5acf524.jpg")',
    stueDag: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357288383291402/stueLys.PNG")',
    stueNatt: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357288676884560/stueNatt.PNG")',
    baderom: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357215746334770/modern-bathroom-furniture-interior-background-illustration-with-bathtub-shower-clean-up_2175-5218.avif")',
}]

var whichRoom;

// View
// i updateView ligger html innholdet
updateView();
function updateView(){
    
body.style.backgroundImage = gameRooms[0].stueDag;

    html = /*html*/ `
    <div class="grid">
    <input type="button" class="btns" value="Start" onclick="trykk(this); statusbars()">
            <input id="doggy" class="dataDyr" type="image" src="" alt="">
            <div class="container">
            <div id="myProgressHunger">
                <div id="hungerBar">100%</div>
               
            </div>
            <div id="myProgressHealth">
                <div id="healthBar">100%</div>
                
            </div>
            <div id="myProgressSleep">
                <div id="sleepBar">100%</div>
                
            </div> 
            </div>

<br>
<div class="arrowRight" id="arrowLeft" >⇐</div>
        <div class="arrowLeft" id="arrowRight">⇒</div>
        <div class="controller">
        <input type="button" id="health1" value="kos"  onclick="trykk(this)">
        <input type="button" id="sleep1" value="søvn"  onclick="trykk(this)">
        <input type="button" id="food1" value="mat" onclick="trykk(this); ">
        </div>
        </div>`;
        
        

    room.innerHTML = html;}

    

// Controler
const leftArrow = document.getElementById('arrowLeft');
const rightArrow = document.getElementById('arrowRight');

// funksjonene og eventlistener avgjør hvilket bakgrunnsbilde som dukker opp når du trykker på pilene
leftArrow.addEventListener("click", updateArrowLeft);
function updateArrowLeft() {
    if (whichRoom == 'livingroom') {
        updateViewBathroom();
    }
    else if (whichRoom == 'bathroom') {
        updateViewKitchen();
    }
    else if (whichRoom == 'kitchen') {
        updateViewBedroom();
    }
    else if (whichRoom == 'bedroom') {
        updateViewLivingroom();
    }
}

rightArrow.addEventListener("click", updateArrowRight); 
function updateArrowRight() {
    if (whichRoom == 'livingroom') {
        updateViewBedroom();
    }
    else if (whichRoom == 'bedroom') {
        updateViewKitchen();
    }
    else if (whichRoom == 'kitchen') {
        updateViewBathroom();
    }
    else if ( whichRoom == 'bathroom') {
        updateViewLivingroom();
    }
}


    

//updateViewLivingroom(); bytter bakgrunnsbildet til stue
function updateViewLivingroom() {
body.style.backgroundImage = gameRooms[0].stueDag;
whichRoom = 'livingroom';}
//updateViewBathroom();
function updateViewBathroom() {
whichRoom = 'bathroom';
body.style.backgroundImage = gameRooms[0].baderom;}

//updateViewKitchen();  bytter bakgrunnsbildet til kjøkken       
function updateViewKitchen() {
whichRoom = 'kitchen';
body.style.backgroundImage = gameRooms[0].kjøkken;}
//updateViewBedroom(); bytter bakgrunnsbildet til soverom
function updateViewBedroom() {
whichRoom = 'bedroom';
body.style.backgroundImage = gameRooms[0].soveRomDag;}


//Funksjonen starter opp behovsmålerne
function statusbars() {
    hungerBar();
     healthBar();
     sleepBar(); 
 }
 
 
//funksjonene hungerBar, healthBar og sleepBar sørger for at behovsbarene animeres 
   
   var i = 100;
   var id;
   var width
   function hungerBar() {
     if (i == 100) {
       i = 1;
       var elem = document.getElementById("hungerBar");
        width = 100;
       id = setInterval(frame, 5000);
       function frame() {
         if (width <= 0) {
           clearInterval(id);
           i = 100;
         } else {
           if (width == 70){
             elem.style.backgroundColor = 'yellow';
             hungerOutPut = 'Sulten';
             //dogMood = dogEmotions[0].dogInsult;
             //console.log(hungerOutPut);
             //console.log('gul');
         } else if (width == 30){
             elem.style.backgroundColor = 'red';
             hungerOutPut = 'Dør av sult';
             //dogMood = dogEmotions[0].dogCrying;
             //console.log(hungerOutPut);
             //console.log('rød');
         } else if (width == 100) {
             elem.style.backgroundColor = '#04ff19';
             hungerOutPut = 'Fornøyd';
             //console.log(hungerOutPut);
             //console.log('grønn');
             //dogMood = dogEmotions[0].dogHappy;
         }
           width--;
           elem.style.width = width + "%";
           elem.innerHTML = hungerOutPut+ ' ' +width  + "%";
           
         }
         
       }
   
     }
   }
   var o = 100;
   var id2;
   var width2
   function healthBar() {
     if (o == 100) {
       o = 1;
       var elem = document.getElementById("healthBar");
       width2 = 100;
       id2 = setInterval(frame, 5000);
       function frame() {
         if (width2 <= 0) {
           clearInterval(id2);
           o = 100;
         } else {
           if (width2 == 70){
             elem.style.backgroundColor = 'yellow';
             healthOutPut = 'Likegyldig';
             //console.log(healthOutPut);
             //console.log('gul');
         } else if (width2 == 30){
             elem.style.backgroundColor = 'red';
             healthOutPut = 'Hysterisk';
             //console.log(healthOutPut);
             //console.log('rød');
         } else if (width2 == 100) {
             elem.style.backgroundColor = '#04ff19';
             healthOutPut = 'Hygger meg';
             //console.log(healthOutPut);
             //console.log('grønn');
         }
           width2--;
           elem.style.width = width2 + "%";
           elem.innerHTML = healthOutPut+ ' ' +width2  + "%";
           
         }
         
       }
   
     }
   }
   var j = 100;
   var id3;
   var width3;
   function sleepBar() {
     if (j == 100) {
       j = 1;
       var elem = document.getElementById("sleepBar");
       width3 = 100;
       id3 = setInterval(frame, 5000);
       function frame() {
         if (width3 <= 0) {
           clearInterval(id3);
           j = 100;
         } else {
           if (width3 == 70){
             elem.style.backgroundColor = 'yellow';
             sleepOutPut = 'Trøtt';
             //console.log(sleepOutPut);
             //console.log('gul');
         } else if (width3 == 30){
             elem.style.backgroundColor = 'red';
             sleepOutPut = 'Besvimer snart';
             //console.log(sleepOutPut);
             //console.log('rød');
         } else if (width3 == 100) {
             elem.style.backgroundColor = '#04ff19';
             sleepOutPut = 'Uthvilt';
             //console.log(sleepOutPut);
             //console.log('grønn');
         }
           width3--;
           elem.style.width = width3 + "%";
           elem.innerHTML = sleepOutPut+ ' ' +width3  + "%";
           
         }
         
       }
   
     }
   }
 // funksjonen trykk() sørger for å animere knapper (bytte ramme og tilbake)
   function trykk(tryktKnapp) {
     console.log(tryktKnapp);
     tryktKnapp.style.borderStyle = 'inset';
     console.log(tryktKnapp.id);
 
     if (tryktKnapp.id === 'sleep1') {
         j = 100;
         sleepBar();
     } else if (tryktKnapp.id === 'food1') {
         i = 100;
         hungerBar();
     } else if (tryktKnapp.id === 'health1'){
         o = 100;
         healthBar();

     }
     const theWatcherTimer = setInterval(theWatcher, 2000); 
     const timer = setTimeout(reset, 200, tryktKnapp);
 
 
 }
 
     function reset(tryktKnapp) {
         console.log(tryktKnapp);
         tryktKnapp.style.borderStyle = 'outset';
     
     
     }

// Her kommer funksjonen theWatcher() som følger med på humør (maxMood, nedstammet fra bredden (width) på behovsbarene) og deretter setter det riktige bildet på plass    
const myDoggy = document.querySelector('#doggy');
function theWatcher() {
  //console.log(i, o, j, width, width2, width3);
  var maxMood = width+width2+width3;
  //console.log(maxMood);
  

  if (maxMood >= 250) {
    myDoggy.src = dogEmotions[0].dogHappy;
    
  }
  else if (maxMood >= 200) {
    myDoggy.src = dogEmotions[0].dogBored;
  }
  else if (maxMood >= 150) {
    myDoggy.src = dogEmotions[0].dogInsult;
  }
  else if (maxMood >= 100) {
    myDoggy.src = dogEmotions[0].dogSad;
  }
  else if (maxMood >0) {
    myDoggy.src = dogEmotions[0].dogCrying;
  }
  else if (maxMood == 0) {
    myDoggy.src = dogEmotions[0].dogDead;
  }
  else {
    console.log("FAILURE");

  }
  return
  
 
}
//disse konstantene må stå her, ellers krasjer programmet.. ellers skulle de vel vært i model..
const arrowTimer = setInterval(buttonHider, 10);
const watchRightArrow = document.querySelector('#arrowRight');
const watchLeftArrow = document.querySelector('#arrowLeft');
const sleepButton = document.querySelector('#sleep1');
const foodButton = document.querySelector('#food1');
const healthButton = document.querySelector('#health1');
watchRightArrow.addEventListener("click", buttonHider());
watchLeftArrow.addEventListener("click", buttonHider());
// buttonHider gjør 2 ting, sørger for at knappene vises og skjules utifra hvilket rom vi er i, og bytter klasse på myDoggy, slik at plassering i rommet endres
function buttonHider() {
  if (body.style.backgroundImage==gameRooms[0].stueDag) {
    whichRoom = 'livingroom';
    //console.log(whichRoom);
    //console.log(sleepButton);
    sleepButton.style.display = 'none';
    foodButton.style.display = 'none';
    healthButton.style.display= '';
    myDoggy.className = 'dataDyr';
  }
   else if (body.style.backgroundImage==gameRooms[0].soveRomDag) {
    whichRoom = 'bedroom';
    //console.log(whichRoom);
    foodButton.style.display = 'none';
    healthButton.style.display = 'none';
    sleepButton.style.display = '';
    myDoggy.className = 'dataDyrBedroom';

  }
  else if (body.style.backgroundImage==gameRooms[0].kjøkken ) {
    whichRoom = 'kitchen';
    //console.log(whichRoom);
    sleepButton.style.display = 'none';
    healthButton.style.display = 'none';
    foodButton.style.display = '';
    myDoggy.className = 'dataDyrKitchen';
  }
  else if (body.style.backgroundImage==gameRooms[0].baderom ) {
    whichRoom = 'bathroom';
    //console.log(whichRoom);
    sleepButton.style.display = 'none';
    healthButton.style.display = 'none';
    foodButton.style.display = 'none';
    myDoggy.className = 'dataDyrBathroom';
  }
  return;
}
