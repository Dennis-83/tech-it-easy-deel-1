import './App.css';
import productsSold from "./helpers/productsSold.js";
import productsBought from "./helpers/productsBought.js";
import productsToBeSold from "./helpers/productsToBeSold.js";
import bestSellingTVString, {bestSellingTVsizes, showTVEuroPrice} from "./helpers/bestSellingTVString.js";
import {inventory} from "./constants/inventory.js";
import biggestScreenSize from "./helpers/biggestScreenSize.js";


function App() {
    const bestTVName = bestSellingTVString(inventory[3]);
    const TVSizes = bestSellingTVsizes(inventory[3]);
    const TVPrice = showTVEuroPrice(inventory[3].price);
    const soldTVs = productsSold(inventory);
    const boughtTVs = productsBought(inventory);
    const toBeSold = productsToBeSold(inventory);
    const productImage = inventory[5].sourceImg;
    const checkIcon = <span><img className="icon" src="../src/assets/check.png" alt="checkmark"/></span>;
    const minusIcon = <span><img className="icon" src="../src/assets/minus.png" alt="checkmark"/></span>;
    return (
        <>
            <h1>Er zijn <span className="green">{soldTVs}</span> televisies verkocht.</h1>
            <h1>Er zijn <span className="blue">{boughtTVs}</span> televisies ingekocht.</h1>
            <h1>Er moeten nog <span className="red">{toBeSold}</span> televisies verkocht worden.</h1>
            <article>
                <div className="tv-image-wrapper">
                    <img src={productImage} alt="image of a tv"/>
                </div>
                <div className="tv-properties">
                    <h1>{bestTVName}</h1>
                    <h1>{TVPrice}</h1>
                    <h1>{TVSizes}</h1>
                    <h1>{checkIcon}wifi {minusIcon}speech {checkIcon}hdr {checkIcon}bluetooth {minusIcon}ambilight</h1>
                </div>
            </article>

            <button onClick={() => {
                console.log(inventory.sort((productA, productB) => productB.sold - productA.sold));
                console.log("Meest verkocht eerst");
            }} type="button" className="button-popular">
                Meest verkocht eerst
            </button>
            <button onClick={() => {
                console.log(inventory.sort((productA, productB) => productA.price - productB.price));
                console.log("Goedkoopste eerst");
            }} type="button" className="button-cheapest">
                Goedkoopste eerst
            </button>
            <button onClick={() => {
                console.log(inventory.sort((productA, productB) => productB.refreshRate - productA.refreshRate));
                console.log("Meest geschikt voor sport eerst");
            }} type="button" className="button-sports">
                Meest geschikt voor sport eerst
            </button>
            <button onClick={() => {
                console.log(inventory.sort((productA, productB) => biggestScreenSize(productB) - biggestScreenSize(productA)));
                console.log("Grootste schermgroottes eerst");
            }} type="button" className="button-biggest-screen">
                Grootste schermgroottes eerst
            </button>

            <ul>
                {inventory.map((tv) => {
                    return <li>
                        {tv.brand}
                    </li>
                })}
            </ul>

            <div>
                {inventory.map((tv) => {
                    return <article>
                        <div className="tv-image-wrapper">
                            <img src={tv.sourceImg} alt="image of a tv"/>
                        </div>
                        <div className="tv-properties">
                            <h1>{bestSellingTVString(tv)}</h1>
                            <h1>{showTVEuroPrice(tv.price)}</h1>
                            <h1>{bestSellingTVsizes(tv)}</h1>
                            <h1>
                                {tv.options.map((option) => {
                                    if (option.applicable) {
                                        return <span> {checkIcon}{option.name}</span>
                                    } else {
                                        return <span> {minusIcon}{option.name}</span>
                                    }
                                })}
                            </h1>
                        </div>
                    </article>
                })}
            </div>
        </>
    )
}

export default App
