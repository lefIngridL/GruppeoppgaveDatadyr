// Model
const room = document.getElementById('room');
const body = document.body;
//let TimerH = 0;
//let TimerS = 0;
//let TimerHu = 0;
let dogMood = '';
//const app = document.getElementById('app');
var hungerOutPut='fornøyd';
var sleepOutPut='uthvilt';
var healthOutPut='glad';


let whichRoom = '';

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
}];

const gameRooms = [{
    soveRomDag: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357216241258587/soveromLys.PNG")',
    soveRomNatt: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357217088507964/soveromNatt.PNG")',
    kjøkken: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357215469502474/bc582639a9c071fadf82a2f2b5acf524.jpg")',
    stueDag: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357288383291402/stueLys.PNG")',
    stueNatt: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357288676884560/stueNatt.PNG")',
    baderom: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357215746334770/modern-bathroom-furniture-interior-background-illustration-with-bathtub-shower-clean-up_2175-5218.avif")',
}]


//Ultimate view


// View livingroom

updateViewLivingroom();
function updateViewLivingroom() {
    whichRoom = 'livingroom';
    body.style.backgroundImage = gameRooms[0].stueDag;
    
    html = /*html*/ `    
    <div class="grid">
    <input type="button" class="btns" value="Start" onclick="trykk(this)"></button>
            <input class="datadyr" type="image" src="${dogMood}" alt="">
            <div id="myProgressHunger">
                <div id="hungerBar">100%</div>
            </div>
            <div id="myProgressHealth">
                <div id="healthBar">100%</div>
            </div>
            <div id="myProgressSleep">
                <div id="sleepBar">100%</div>
            </div>

<br>


            
            <div class="arrowRight" onclick="updateViewBathroom()">⇐</div>
            <div class="arrowLeft" onclick="updateViewBedroom()">⇒</div>
            <input type="button" id="health" value="kos" class="btns health" onclick="trykk(this); ">
            </div>
            `;
    room.innerHTML = html;
}

// View Bathroom
function updateViewBathroom() {
    whichRoom = 'bathroom';
    body.style.backgroundImage = gameRooms[0].baderom;
    html = /*html*/ `
            <div class="grid">
            <input type="button" class="btns" value="Start" onclick="trykk(this); hungerBar(); healthBar();  sleepBar(); updateDogMood() ">                
            <input class="datadyr" type="image" src='${dogMood}' alt="">
                <div id="myProgressHunger">
                <div id="hungerBar">100%</div>
            </div>
                <div id="myProgressHealth">
                    <div id="healthBar">100%</div>
                </div>
                <div id="myProgressSleep">
                <div id="sleepBar">100%</div>
            </div>
            <div class="arrowRight" onclick="updateViewKitchen()">⇐</div>
            <div class="arrowLeft" onclick="updateViewLivingroom()">⇒</div>
            </div>
            `;
    room.innerHTML = html;
}

// View Kitchen
function updateViewKitchen() {
    whichRoom = 'kitchen';
    body.style.backgroundImage = gameRooms[0].kjøkken;
    html = /*html*/ `
    <div class="grid">
    <input type="button" class="btns" value="Start" onclick="trykk(this); hungerBar(); healthBar();  sleepBar(); updateDogMood() ">
    <input class="datadyrKitchen" type="image" src="${dogMood}" alt="">
    <div id="myProgressHunger" class="status">
                <div id="hungerBar">100%</div>
            </div>
            <div id="myProgressHealth" class="status">
                <div id="healthBar">100%</div>
            </div>
            <div id="myProgressSleep" class="status">
                <div id="sleepBar">100%</div>
            </div>
    <div class="arrowRight" onclick="updateViewBedroom()">⇐</div>
    <div class="arrowLeft" onclick="updateViewBathroom()">⇒</div>
    
    <input type="button" id="food" value="mat" class="btns food" onclick="trykk(this); ">
    </div>
    `;
    let noe = document.getElementById('healthBar');
    console.log(noe);
    room.innerHTML = html;
}

// View Bedroom
function updateViewBedroom() {
    whichRoom = 'bedroom';
    body.style.backgroundImage = gameRooms[0].soveRomDag;
    html = /*html*/ `
    <div class="grid">
    <input type="button" class="btns" value="Start" onclick="trykk(this); hungerBar(); healthBar();  sleepBar(); updateDogMood() ">
    <input class="datadyrBedroom" type="image" src="${dogMood}" alt="">
        <div id="myProgressHunger">
            <div id="hungerBar">100%</div>
        </div>
        <div id="myProgressHealth">
            <div id="healthBar">100%</div>
        </div>
        <div id="myProgressSleep">
            <div id="sleepBar">100%</div>
        </div>
    <div class="arrowRight" onclick="updateViewLivingroom()">⇐</div>
    <div class="arrowLeft" onclick="updateViewKitchen()">⇒</div>
    
    <input type="button" id="sleep" value="søvn" class="btns sleep" onclick="trykk(this)">
    </div>-
    `;
    room.innerHTML = html;
}

// Controler

//de neste 2 Funskjonene "animerer" knappene


function trykk(tryktKnapp) {

    if (tryktKnapp.id === 'sleep') {
        i = 100;
    } else if (tryktKnapp.id === 'food') {
        o = 100;
    } else {
        j = 100;
    }
    let repeatId = document.getElementById(tryktKnapp.id);
    repeatId.classList.toggle('btns');
    repeatId.classList.toggle('btnsClick');
    const timer = setTimeout(reset, 200, repeatId);


}

function reset(repeatId) {
    repeatId.classList.toggle('btns');
    repeatId.classList.toggle('btnsClick');
updateDogMood();
}

function updateDogMood () {
    const dogMoodTimer = setInterval(setDogMood, 1000);
function setDogMood() {
    if (healthBar == 'Hygger meg' && sleepBar == 'Uthvilt' && hungerBar == 'Fornøyd') {
        dogMood = dogEmotions[0].dogHappy;
    }
    else if (healthBar == 'Likegyldig' && sleepBar == 'Trøtt' && hungerBar == 'Sulten') {
        dogMood = dogEmotions[0].dogInsult;
    }
    else if (healthBar == 'Hysterisk' && sleepBar == 'Besvimer snart' && hungerBar == 'Dør av sult') {
        dogMood = dogEmotions[0].dogCrying;
    }
    else {
        dogMood = dogEmotions[0].dogBored;
    }
    /*if (whichRoom == 'livingroom') {
        updateViewLivingroom();
    } else if (whichRoom == 'bedroom') {
        updateViewBedroom();
    } else if (whichRoom == 'kitchen') {
        updateViewKitchen();
    } else {
        updateViewBathroom();
    }*/
}}



  
  var i = 100;
  function hungerBar() {
    if (i == 100) {
      i = 1;
      var elem = document.getElementById("hungerBar");
      var width = 100;
      var id = setInterval(frame, 500);
      function frame() {
        if (width <= 0) {
          clearInterval(id);
          i = 100;
        } else {
          if (width == 70){
            elem.style.backgroundColor = 'yellow';
            hungerOutPut = 'Sulten';
            console.log(hungerOutPut);
            console.log('gul');
        } else if (width == 30){
            elem.style.backgroundColor = 'red';
            hungerOutPut = 'Dør av sult';
            console.log(hungerOutPut);
            console.log('rød');
        } else if (width == 100) {
            elem.style.backgroundColor = '#04ff19';
            hungerOutPut = 'Fornøyd';
            console.log(hungerOutPut);
            console.log('grønn');
        }
          width--;
          elem.style.width = width + "%";
          elem.innerHTML = hungerOutPut+ ' ' +width  + "%";
          
        }
        
      }
  
    }
  }
  var o = 100;
  function healthBar() {
    if (o == 100) {
      o = 1;
      var elem = document.getElementById("healthBar");
      var width = 100;
      var id = setInterval(frame, 500);
      function frame() {
        if (width <= 0) {
          clearInterval(id);
          o = 100;
        } else {
          if (width == 70){
            elem.style.backgroundColor = 'yellow';
            healthOutPut = 'Likegyldig';
            console.log(healthOutPut);
            console.log('gul');
        } else if (width == 30){
            elem.style.backgroundColor = 'red';
            healthOutPut = 'Hysterisk';
            console.log(healthOutPut);
            console.log('rød');
        } else if (width == 100) {
            elem.style.backgroundColor = '#04ff19';
            healthOutPut = 'Hygger meg';
            console.log(healthOutPut);
            console.log('grønn');
        }
          width--;
          elem.style.width = width + "%";
          elem.innerHTML = healthOutPut+ ' ' +width  + "%";
          
        }
        
      }
  
    }
  }
  var j = 100;
  function sleepBar() {
    if (j == 100) {
      j = 1;
      var elem = document.getElementById("sleepBar");
      var width = 100;
      var id = setInterval(frame, 500);
      function frame() {
        if (width <= 0) {
          clearInterval(id);
          i = 100;
        } else {
          if (width == 70){
            elem.style.backgroundColor = 'yellow';
            sleepOutPut = 'Trøtt';
            console.log(sleepOutPut);
            console.log('gul');
        } else if (width == 30){
            elem.style.backgroundColor = 'red';
            sleepOutPut = 'Besvimer snart';
            console.log(sleepOutPut);
            console.log('rød');
        } else if (width == 100) {
            elem.style.backgroundColor = '#04ff19';
            sleepOutPut = 'Uthvilt';
            console.log(sleepOutPut);
            console.log('grønn');
        }
          width--;
          elem.style.width = width + "%";
          elem.innerHTML = sleepOutPut+ ' ' +width  + "%";
          
        }
        
      }
  
    }
  }

  

// sette opp en timer for hver statusbar
// når timer går over en hvis grense skal statusbar tekst endres til (tekst)!
// når timer er over grensen skal tekst bli rød og (tekst)!!!
/*statusBarFunction();
function statusBarFunction() {
    const health = setInterval(setTimerHealth, 1000)
    const sleep = setInterval(setTimerSleep, 1000)
    //const hunger = setInterval(setTimerHunger, 1000)
}

function setTimerHealth() {
    TimerH++;
    if (TimerH == 10) {
        // healthBar.innerHTML = 'Affeksjon';
        healthOutPut = 'Affeksjon';
        HColor = 'Yellow';
    } else if (TimerH == 20) {
        // healthBar.innerHTML = 'Dør av ingen kos';
        healthOutPut = 'Dør av ingen kos';
        HColor = 'Red';
    } else if (TimerH == 0) {
        // healthBar.innerHTML = 'Lykke';
        healthOutPut = 'Lykke';
        //HColor = '#04ff19'
    }
}
function setTimerSleep() {
    TimerS++;
    if (TimerS >= 10 && TimerS < 20) {
        // sleepBar.innerHTML = 'Trøtt';
        sleepOutPut = 'Trøtt';
        SColor = 'Yellow'
    } else if (TimerS >= 20) {
        // sleepBar.innerHTML = 'Kommer til å kolapse';
        sleepOutPut = 'Kommer til å kollapse';
        SColor = 'Red'
    } else {
        // sleepBar.innerHTML = 'Søvn';
        sleepOutPut = 'Søvn'
        //SColor = '#04ff19'
    }
    setDogMood(healthOutPut, sleepOutPut, hungerOutPut);
}
setTimerHunger();
var i = 100;
function setTimerHunger() {
    if (i == 100) {
        i = 1;
        var elem = document.getElementById("hungerBar");
        var width = 100;
        var id = setInterval(frame, 100);
        function frame() {
            hungerOutPut = elem.innerHTML;
            if (width <= 0) {
                clearInterval(id);
                i = 100;
            } else {
                if (width == 100) {
                    elem.style.backgroundColor = '#04ff19';
                    hungerOutPut = 'sult';
                } else if (width == 70) {
                    elem.style.backgroundColor = 'yellow';
                    hungerOutPut = 'sulten';
                } else if (width == 30) {
                    elem.style.backgroundColor = 'red';
                    hungerOutPut = 'Dør av sult';
                }
                width--;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
                
            }

        }
    }setDogMood(healthOutPut, sleepOutPut, hungerOutPut);
}
/*function setTimerHunger() {
    TimerHu++;
    if (TimerHu >= 10 && TimerHu < 20) {
        // hungerBar.innerHTML = 'Sulten';
        hungerOutPut = 'Sulten';
        //HuColor = 'Yellow'
    } else if (TimerHu >= 20) {
        // hungerBar.innerHTML = 'Dør av sult';
        hungerOutPut = 'Dør av sult';
        //HuColor = 'Red'
    } else {
        // hungerBar.innerHTML = 'Sult';
        hungerOutPut = 'Sult';
       // HuColor = 'Green'
    }
    setDogMood(healthOutPut, sleepOutPut, hungerOutPut);
}*/

