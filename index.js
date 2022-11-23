// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    return Math.abs((someValue -42) * 264);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination) {
    if(Math.abs((destination - start) * 264) <= 400) {
        return 0;
    } else if(Math.abs((destination - start) * 264) <= 2000) {
        return ((Math.abs((destination - start) * 264)) - 400) * 0.02;
    } else if(Math.abs((destination - start) * 264) <= 2500) {
        return 25;
    } else if(Math.abs((destination - start) * 264) > 2500) {
        return 'cannot travel that far';
    }
}