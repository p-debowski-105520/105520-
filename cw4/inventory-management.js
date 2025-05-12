const inventory = [
    {name: "sugar", quantity: 10},
    {name: "flour", quantity: 5},
    {name: "salt", quantity: 20},
    {name: "rice", quantity: 15},
];
function findProductIndex(fname){
    return inventory.findIndex(item => item.name.toLowerCase() == fname.toLowerCase());
}
console.log(findProductIndex("flour"));

function addProduct(product){
    const index = findProductIndex(product.name)
    if (index !== -1){
        inventory[index].quantity += product.quantity;
        console.log(product.name.toLowerCase()+" quantity updated");
        console.log(inventory[index].name+" "+inventory[index].quantity);
    } else {
        inventory.push({name: product.name.toLowerCase(), quantity: product.quantity});
        console.log(product.name+" added to inventory");
        console.log(inventory[inventory.length-1].name+" "+inventory[inventory.length-1].quantity);
    }
}
addProduct({name: "FLOUR", quantity: 5});

function removeProduct(pname, pquantity){
    const index = findProductIndex(pname);
    if (index !== -1){
        if(pquantity < inventory[index].quantity){
            inventory[index].quantity -= pquantity;
            console.log("Remaining "+inventory[index].name+" pieces: "+inventory[index].quantity);
        }
        else if(pquantity > inventory[index].quantity){
            console.log("Not enough "+inventory[index].name+", remaining pieces"+inventory[index].quantity)
    }
    else{
        console.log(inventory[index].name+" has depleted");
        inventory.splice(index, 1);
    }
} else{
    console.log(pname+" not found");
}
}
removeProduct("FLOUR", 10);
console.log(inventory);