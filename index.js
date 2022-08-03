// Code your solutions in this file
for (let age = 30; age <40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(array, eventName) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`
    }
    return newArray;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday"); 


function countDown(positiveInteger) {
    while (positiveInteger > -1) {
        console.log(positiveInteger);
        positiveInteger--;
    }
}

countDown(10);