/*
MVP Minimum Viable Product Outline:
    Show pet /
    Name/
        -Request a name/
        -Display name/
    Age
        -start age at 0? 1?/
        - increase at X min/
    Stats
        -Hunger/
        -Sleepiness/
        -Boredom/
            -- start at 50/
                --- max stat 100/
                --- if stat = 0 -> die/gameover/
            -- decrease stat per X min/
    Buttons
        - Feed [hunger] /
        - Turn off light [sleep] /
        - Play [bored] /

Version 2.0 Outline:
    Style the page [more than initial]/
    Morph pet at certain age/
        - morphed stat interactions?
    Animate live pet/
Stretch / Icebox Features:
    Add button click sounds/
    Add game music/
    add game over music/
*/

// STEP ZERO: ADD PET OBJECT & ORGANIZED VARIABLES
const $hungerBar = $("#bar--hunger");
const $sleepBar = $("#bar--sleep");
const $boredBar = $("#bar--bored");

        // REVIEW: These buttons may not be necessary? Have selected all buttons/this button; only need id in updateStat if statement?
// const $feedButton = $("#button--feed");
// const $bedButton = $("#button--bed");
// const $playButton = $("#button--play");

const $button = $("button");
const $confirmButton = $("#button--confirm");

const pet = {
    "name": "placeholder",
    "age": 0,
    "hunger": $hungerBar.val(),
    "sleepiness": $sleepBar.val(),
    "boredom": $boredBar.val(),
    "scale": 1,
    "bright": 1,
}

// STEP ONE: ADD BUTTON LISTENER/STAT UPDATER
const test = function test(event) {
    console.log(this);
}


const updateStat = function updateStat(event) {
    // console.log(this.id);
    // console.log($feedButton.prop("id"));
    getSound("button");
    if(this.id === "button--feed"){
        if(pet.hunger <= 100) {
            pet.hunger += 10;
            $hungerBar.val(pet.hunger);
            getAnimation($octocat, "rubberband");
            if(pet.hunger > 30) {
                getAnimation($hungerBar, "remove");
            }
        }
    } else if(this.id === "button--bed") {
        if(pet.sleepiness <= 100) {
            pet.sleepiness += 10;
            $sleepBar.val(pet.sleepiness);
            getAnimation($octocat, "swing");
            if(pet.sleepiness > 30) {
                getAnimation($sleepBar, "remove");
            }
        }
    } else if (this.id === "button--play") {
        if(pet.boredom <= 100) {
            pet.boredom += 10;
            $boredBar.val(pet.boredom);
            getAnimation($octocat, "tada");
            if(pet.boredom > 30) {
                getAnimation($boredBar, "remove");
            }
        }
    }
}

// STEP TWO: ADD NAME INPUT/MODAL HANDLER
const startGame = function startGame(event) {
    event.stopPropagation();
    console.log("confirmButton");
    if($("input").val()) {
        console.log("Has value)");
        const $name = $("#name");
        pet.name = $("#name_field").val().toUpperCase();
        $name.text(`Name: ${pet.name}`);
    
        // STARTS GAME HERE AFTER MODAL
            // - hides modal button
            // - sets the age
            // - starts the game timer
            // - starts game music
        $("#button--name").hide();
        setAge();
        startTime();
        getSound("startGame");
    }
}
const setAge = function setAge() {
    const $age = $("#age");
    pet.age++;
    $age.text(`Age: ${pet.age}`);
}

// STEP THREE: IMPLEMENT TIME
let time = 0;
const startTime = function startTime() {
    const updateTime = function updatTime() {
        time++;
        console.log(time);
        if(time % 9 === 0) {
            setAge();
            getAnimation($octocat, "evolve");
        }
        if(time % 3 === 0) {
            if(pet.hunger > 0) {
                pet.hunger -= 10;
                $hungerBar.val(pet.hunger);
                if(pet.hunger <= 30) {
                    getAnimation($hungerBar, "flash");
                    $octocat.addClass("walking");
                }
            }
            if(pet.sleepiness > 0) {
                pet.sleepiness -= 10;
                $sleepBar.val(pet.sleepiness);
                if(pet.sleepiness <= 30) {
                    getAnimation($sleepBar, "flash");
                    $octocat.addClass("walking");
                }
            }
            if(pet.boredom > 0) {
                pet.boredom -= 10;
                $boredBar.val(pet.boredom);
                if(pet.boredom <= 30) {
                    getAnimation($boredBar, "flash");
                    $octocat.addClass("walking");
                }
            }
            if(pet.hunger === 0 || pet.sleepiness === 0 || pet.boredom === 0) {
                clearInterval(timer);
                console.log("Game Over");
                getSound("endGame");
                setTimeout(function() {$endModal[0].showModal();}, 2005);
                getAnimation($hungerBar, "remove");
                getAnimation($sleepBar, "remove");
                getAnimation($boredBar, "remove");
                getAnimation($octocat, "fade");
            }
        }
    }
    const timer = setInterval(updateTime, 1000);
}

// STEP FOUR: ADD ANIMATIONS/SOUNDS/MORPH EFFECTS
$octocat = $("#octocat");

const getAnimation = function getAnimation(object, selection) {
    if(selection === "fade") {
        // ********ANCHOR: ADD/REMOVE THIS FADE FOR TESTING CODE
        $octocat.removeClass("walking");
        object.addClass("animate__animated animate__slower animate__fadeOutUp");
        object.on('animationend', () => {
            object.hide();
        });
    }
    if(selection === "flash") {
        object.addClass("animate__animated animate__slow animate__flash animate__infinite");
    }
    if(selection === "remove") {
        object.removeClass("animate__animated");
    }
    if(selection === "tada") {
        object.removeClass("walking");
        object.addClass("animate__animated animate__tada");
        object.on('animationend', () => {
            object.removeClass("animate__animated animate__tada");
        });
    }
    if(selection === "swing") {
        object.removeClass("walking");
        object.addClass("animate__animated animate__swing");
        object.on('animationend', () => {
            object.removeClass("animate__animated animate__swing");
        });
    }
    if(selection === "rubberband") {
        object.removeClass("walking");
        object.addClass("animate__animated animate__rubberBand");
        object.on('animationend', () => {
            object.removeClass("animate__animated animate__rubberBand");
        });
    }
    if(selection === "evolve") {
        getSound("evolve");
        object.removeClass("walking");
        object.addClass("evolve animate__animated animate__heartBeat");
        let element = $(".evolve");
        pet.scale += 0.5;
        pet.bright += 0.8;
        element[0].style.setProperty('--scale', pet.scale);
        element[0].style.setProperty('--bright', pet.bright);
        object.on('animationend', () => {
            object.removeClass("animate__animated animate__heartBeat");
        });
    }
}

// BONUS STEP: ADDING BUTTON MUSIC AND PLAY/GAME OVER MUSIC
const getSound = function getSound(element) {
    const $buttonSound = $("#audio");
    const $audio_bg = $("#audio_bg");
    const $audio_end = $("#audio_end");
    const $powerup = $("#powerup");
    if(element === "button") {
        $buttonSound[0].play();
    }
    if(element === "evolve") {
        $powerup[0].play();
    }
    if(element === "startGame") {
        $audio_bg[0].play();
    }
    if(element === "endGame") {
        $audio_bg[0].pause();
        $audio_end[0].play();
    }
}

/* *** CALLED FUNCTION / TESTING *** */
$button.on("click", updateStat);
$startModal = $("#dialog-rounded");
$endModal = $("#dialog-rounded2");

// ********ANCHOR: ADD/REMOVE THIS FOR TESTING CODE
$startModal[0].showModal(); 
// $endModal[0].showModal(); 
$confirmButton.on("click", startGame);
// $("input").prop('required',true);
