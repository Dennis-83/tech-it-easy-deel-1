import {inventory} from "../constants/inventory.js";

function productsSold(productsArray) {
    let totalSold = 0;
    for (let i = 0; i < productsArray.length; i++) {
        totalSold += productsArray[i].sold;
    }
    // console.log(totalSold);
    return totalSold;
}

export default productsSold;