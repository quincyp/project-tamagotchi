/*
MVP Minimum Viable Product Outline:
    Show pet/
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
        - Feed [hunger]
        - Turn off light [sleep]
        - Play [bored]

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
const $feedButton = $("#button--feed");

const pet = {
    "name": "placeholder",
    "age": 0,
    "hunger": $hungerBar.val(),
}

// STEP ONE: ADD BUTTON LISTENER
const test = function test(event) {
    console.log("test");
}


const updateStat = function updateStat(event) {
    console.log($hungerBar);
    $hungerBar.val($hungerBar.val() + 10);
}




/* *** CALLING SCRIPTS FOR TESTING *** */
$feedButton.on("click", updateStat);
// $playButton.on("click", test);
// $sleepButton.on("click", test);