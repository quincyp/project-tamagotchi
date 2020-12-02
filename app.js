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

// STEP ONE: ADD BUTTON LISTENER
const $feedButton = $("#button--feed");
const test = function test(event) {
    console.log("test");
}

// const stat = 1;

const $hungerBar = $("#bar--hunger");
const updateStat = function updateStat(event) {
    console.log($hungerBar);
    $hungerBar.val($hungerBar.val() + 10);
}

/* *** CALLING SCRIPTS FOR TESTING *** */
$feedButton.on("click", updateStat);
// $playButton.on("click", test);