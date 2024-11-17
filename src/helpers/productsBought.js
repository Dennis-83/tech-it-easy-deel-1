import {inventory} from "../constants/inventory.js";

function productsBought(productsArray) {
    let totalBought = 0;
    for (let i = 0; i < productsArray.length; i++) {
        totalBought += productsArray[i].originalStock;
    }
    // console.log(totalBought);
    return totalBought;
}

export default productsBought;