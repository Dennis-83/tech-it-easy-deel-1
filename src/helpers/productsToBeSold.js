import productsBought from "./productsBought.js";
import productsSold from "./productsSold.js";

function productsToBeSold() {
    const stock = productsBought();
    const sold = productsSold();
    console.log(stock - sold);
    return stock - sold;
}

export default productsToBeSold;