/*
MVP Minimum Viable Product Outline:
    Show pet /
    Name/
        -Request a name/
        -Display name/
    Age
        -start age at 0? 1?/
        - increase at X min
    Stats
        -Hunger/
        -Sleepiness/
        -Boredom/
            -- start at 50/
                --- max stat 100/
                --- if stat = 0 -> die/gameover
            -- decrease stat per X min/
    Buttons
        - Feed [hunger] /
        - Turn off light [sleep] /
        - Play [bored] /

Version 2.0 Outline:
    Style the page [more than initial]/
    Morph pet at certain age
        - morphed stat interactions?
    Animate live pet
Stretch / Icebox Features:
    to be decided
*/

console.log("Test");
console.log($);


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
}

// STEP ONE: ADD BUTTON LISTENER/STAT UPDATER
const test = function test(event) {
    console.log(this);
}


const updateStat = function updateStat(event) {
    console.log(this.id);
    // console.log($feedButton.prop("id"));
    if(this.id === "button--feed"){
        if(pet.hunger <= 100) {
            pet.hunger += 10;
            $hungerBar.val(pet.hunger);
            if(pet.hunger > 30) {
                $hungerBar.removeClass("animate__animated animate__slow animate__flash animate__infinite");
            }
        }
    } else if(this.id === "button--bed") {
        if(pet.sleepiness <= 100) {
            pet.sleepiness += 10;
            $sleepBar.val(pet.sleepiness);
            if(pet.sleepiness > 30) {
                $sleepBar.removeClass("animate__animated animate__slow animate__flash animate__infinite");
            }
        }
    } else if (this.id === "button--play") {
        if(pet.boredom <= 100) {
            pet.boredom += 10;
            $boredBar.val(pet.boredom);
            if(pet.boredom > 30) {
                $boredBar.removeClass("animate__animated animate__slow animate__flash animate__infinite");
            }
        }
    }
}

// STEP TWO: ADD NAME INPUT/MODAL HANDLER
const setName = function setName(event) {
    event.stopPropagation();
    console.log("confirmButton");
    const $name = $("#name");
    pet.name = $("#name_field").val().toUpperCase();
    $name.text(`Name: ${pet.name}`);

    // STARTS GAME HERE AFTER MODAL
        // - hides modal button
        // - sets the age
        // - starts the game timer
    $("#button--name").hide();
    setAge();
    startTime();
}
//REVIEW: set age is working, but consider age++ instead
const setAge = function setAge(age=0) {
    const $age = $("#age");
    pet.age = age;
    $age.text(`Age: ${pet.age}`);
}

// STEP THREE: IMPLEMENT TIME
let time = 0;
const startTime = function startTime() {
    const updateTime = function updatTime() {
        time++;
        console.log(time);
        if(time % 9 === 0) {
            setAge(1); //REVIEW: set age effected here
        }
        if(time % 3 === 0) {
            if(pet.hunger > 0) {
                pet.hunger -= 10;
                $hungerBar.val(pet.hunger);
                if(pet.hunger <= 30) {
                    $hungerBar.addClass("animate__animated animate__slow animate__flash animate__infinite");
                }
            }
            if(pet.sleepiness > 0) {
                pet.sleepiness -= 10;
                $sleepBar.val(pet.sleepiness);
                if(pet.sleepiness <= 30) {
                    $sleepBar.addClass("animate__animated animate__slow animate__flash animate__infinite");
                }
            }
            if(pet.boredom > 0) {
                pet.boredom -= 10;
                $boredBar.val(pet.boredom);
                if(pet.boredom <= 30) {
                    $boredBar.addClass("animate__animated animate__slow animate__flash animate__infinite");
                }
            }
            if(pet.hunger === 0 || pet.sleepiness === 0 || pet.boredom === 0) {
                clearInterval(timer);
                console.log("Game Over");
            }
        }
    }
    const timer = setInterval(updateTime, 1000);
}

// STEP FOUR: ADD ANIMATIONS/SOUNDS/MORPH EFFECTS



/* *** CALLED FUNCTION / TESTING *** */
$button.on("click", updateStat);
$modal = $("#dialog-rounded");

// TODO: ADD THIS LATER, TURNED MODAL OFF FOR TESTING UPDATED CODE
$modal[0].showModal(); 

// document.getElementById('dialog-rounded').showModal();

$confirmButton.on("click", setName);