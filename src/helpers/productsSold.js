import {inventory} from "../constants/inventory.js";

function productsSold() {
    let totalSold = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalSold += inventory[i].sold;
    }
    console.log(totalSold);
    return totalSold;
}

export default productsSold;