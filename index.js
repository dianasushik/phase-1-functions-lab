function distanceFromHqInBlocks(pickupBlock) {
    return Math.abs(42 - pickupBlock) //Use abs because we want a positive number
}

function distanceFromHqInFeet(pickupBlock){  // where passanger is getting picked up
    return distanceFromHqInBlocks(pickupBlock) * 264
}
function distanceTravelledInFeet(start, end){
    return Math.abs(start - end)* 264 // want positive number but transfered to feet

} 

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    } else if (distance <= 2000){
        return (distance - 400) * 0.02
    } else if (distance < 2500){
        return 25
    } else { //no need for description because it is the last option
    return 'cannot travel that far'
    }
}