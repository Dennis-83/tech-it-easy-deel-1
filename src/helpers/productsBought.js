import {inventory} from "../constants/inventory.js";

function productsBought() {
    let totalBought = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalBought += inventory[i].originalStock;
    }
    console.log(totalBought);
    return totalBought;
}

export default productsBought;