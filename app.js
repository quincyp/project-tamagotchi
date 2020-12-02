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
        -Hunger
        -Sleepiness
        -Boredom
            -- start at 1
                --- if stat = 10 -> die
            -- increase stat per X min
    Buttons
        - Feed [hunger] /
        - Turn off light [sleep] /
        - Play [bored] /

Version 2.0 Outline:
    Style the page [more than initial]
    Morph pet at certain age
        - morphed stat interactions?
    Animate live pet
Stretch / Icebox Features:
    to be decided
*/

console.log("Test");
console.log($);


// STEP ZERO: ADD PET OBJECT & ORGANIZED VARIABLES NOTE: can create class Pet and extend at later time
const $hungerBar = $("#bar--hunger");
const $sleepBar = $("#bar--sleep");
const $boredBar = $("#bar--bored");

        // REVIEW: These buttons may not be necessary? Have selected all buttons/this button; only need id in updateStat if statement?
// const $feedButton = $("#button--feed");
// const $bedButton = $("#button--bed");
// const $playButton = $("#button--play");

const $button = $("button");
const $confirmButton = $(".nes-btn");

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
        pet.hunger += 10;
        $hungerBar.val(pet.hunger);
    } else if(this.id === "button--bed") {
        pet.sleepiness += 10;
        $sleepBar.val(pet.sleepiness);
    } else if (this.id === "button--play") {
        pet.boredom += 10;
        $boredBar.val(pet.boredom);
    }
}

// STEP TWO: ADD NAME INPUT/MODAL HANDLER
const setName = function setName() {
    const $name = $("#name");
    pet.name = $("#name_field").val().toUpperCase();
    $name.text(`Name: ${pet.name}`);
    $("#button--name").hide();
}

const setAge = function setAge() {
    const $age = $("#age");
    $age.text(`Age: ${pet.age}`);
}


/* *** CALLED FUNCTION / TESTING *** */
$button.on("click", updateStat);
$modal = $("#dialog-rounded");
$modal[0].showModal();
// document.getElementById('dialog-rounded').showModal();

$confirmButton.on("click", setName);
setAge();