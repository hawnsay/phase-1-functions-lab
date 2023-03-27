function distanceFromHqInBlocks(pickupLocation, blocksAway) {
    blocksAway = pickupLocation - 42;
    return Math.abs(blocksAway);
}

function distanceFromHqInFeet(pickupLocation,inFeet) {
   inFeet = distanceFromHqInBlocks(pickupLocation) * 264
    return Math.abs(inFeet);
}

function distanceTravelledInFeet(start, destination, distanceTravelled) {
    distanceTravelled = Math.abs(start - destination) * 264;
    return distanceTravelled;
}

function calculatesFarePrice(start, destination, farePrice) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
       return farePrice = 0;
    }
    if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
       return Math.abs(farePrice = (distanceTravelledInFeet(start, destination) - 400) * 0.02);
    } 
    if (distanceTravelledInFeet(start,destination) > 2000 && (distanceTravelledInFeet(start,destination) < 2499)) {
       return farePrice = 25;
    } 
    if (distanceTravelledInFeet(start, destination) >= 2500) {
       return farePrice = "cannot travel that far" 
    }
}