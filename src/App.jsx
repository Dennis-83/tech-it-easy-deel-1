import './App.css';
import productsSold from "./helpers/productsSold.js";
import productsBought from "./helpers/productsBought.js";
import productsToBeSold from "./helpers/productsToBeSold.js";
import bestSellingTVString, {bestSellingTVsizes, showTVEuroPrice} from "./helpers/bestSellingTVString.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";


function App() {
    const bestTVName = bestSellingTVString(bestSellingTv);
    const TVSizes = bestSellingTVsizes(bestSellingTv);
    const TVprice = showTVEuroPrice(bestSellingTv.price);
    const soldTVs = productsSold(inventory);
    const boughtTVs = productsBought(inventory);
    const toBeSold = productsToBeSold(inventory);
    const productImage = bestSellingTv.sourceImg;
    return (
        <>
            <h1>Er zijn <span className="green">{soldTVs}</span> televisies verkocht.</h1>
            <h1>Er zijn <span className="blue">{boughtTVs}</span> televisies ingekocht.</h1>
            <h1>Er moeten nog <span className="red">{toBeSold}</span> televisies verkocht worden.</h1>
            <h1>{bestTVName}</h1>
            <h1>{TVprice}</h1>
            <h1>{TVSizes}</h1>

            <article>
                <div className="tv-image-wrapper">
                    <img src={productImage} alt="image of a tv"/>
                </div>
                <div className="tv-properties">
                    <h1>{bestTVName}</h1>
                    <h1>{TVprice}</h1>
                    <h1>{TVSizes}</h1>
                </div>
            </article>

            <button onClick={() => console.log("Meest verkocht eerst")} type="button" className="button-popular">
                Meest verkocht eerst
            </button>
            <button onClick={() => console.log("Goedkoopste eerst")} type="button" className="button-cheapest">
                Goedkoopste eerst
            </button>
            <button onClick={() => console.log("Meest geschikt voor sport eerst")} type="button" className="button-sports">
                Meest geschikt voor sport eerst
            </button>
        </>
    )
}

export default App
