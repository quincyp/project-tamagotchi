/*
MVP Minimum Viable Product Outline:
    Show pet /
    Name
        -Request a name
        -Display name
    Age
        -start age at 0? 1?
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
}

// STEP ONE: ADD BUTTON LISTENER/STAT UPDATER
const test = function test(event) {
    console.log(this);
}


const updateStat = function updateStat(event) {
    console.log(this.id);
    // console.log($feedButton.prop("id"));
    if(this.id === "button--feed"){
        $hungerBar.val($hungerBar.val() + 10);
    } else if(this.id === "button--bed") {
        $sleepBar.val($sleepBar.val() + 10);
    } else if (this.id === "button--play") {
        $boredBar.val($boredBar.val() + 10);
    }
}

// STEP TWO: ADD NAME INPUT/MODAL HANDLER
const setName = function setName() {
    let $name = $("#name");
    nameInput = $("#name_field").val();
    $name.text(`Name: ${nameInput}`);
    $("#button--name").hide();
}


/* *** CALLED FUNCTION / TESTING *** */
$button.on("click", updateStat);
$modal = $("#dialog-rounded");
$modal[0].showModal();
// document.getElementById('dialog-rounded').showModal();


$confirmButton.on("click", setName);