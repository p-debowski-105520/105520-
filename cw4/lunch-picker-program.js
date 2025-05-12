let lunches = [];

function addLunchToEnd(array, lunchItem) {
    array.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return array;
}

function addLunchToStart(array, lunchItem) {
    array.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return array;
}

function removeLastLunch(array) {
    if (array.length === 0) {
        console.log("No lunches to remove.");
        return array;
    }
    const removedItem = array.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
    return array;
}

function removeFirstLunch(array) {
    if (array.length === 0) {
        console.log("No lunches to remove.");
        return array;
    }
    const removedItem = array.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
    return array;
}

function getRandomLunch(array) {
    if (array.length === 0) {
        console.log("No lunches available.");
        return;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    console.log(`Randomly selected lunch: ${array[randomIndex]}`);
}

function showLunchMenu(array) {
    if (array.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log(`Menu items: ${array.join(', ')}`);
    }
}

addLunchToEnd(lunches, "Pizza");
addLunchToStart(lunches, "Salad");
removeLastLunch(lunches);
removeFirstLunch(lunches);
getRandomLunch(lunches);
showLunchMenu(lunches);
