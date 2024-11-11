import productsBought from "./productsBought.js";
import productsSold from "./productsSold.js";

function productsToBeSold(productsArray) {
    const stock = productsBought(productsArray);
    const sold = productsSold(productsArray);
    // console.log(stock - sold);
    return stock - sold;
}

export default productsToBeSold;