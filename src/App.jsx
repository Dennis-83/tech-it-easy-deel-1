import './App.css';
import productsSold from "./helpers/productsSold.js";
import productsBought from "./helpers/productsBought.js";
import productsToBeSold from "./helpers/productsToBeSold.js";
import bestSellingTVString from "./helpers/bestSellingTVString.js";


function App() {
    const bestTV = bestSellingTVString();
    const soldTVs = productsSold();
    const boughtTVs = productsBought();
    const toBeSold = productsToBeSold();
    return (
        <>
            <h1>Er zijn <span className="green">{soldTVs}</span> televisies verkocht.</h1>
            <h1>Er zijn <span className="blue">{boughtTVs}</span> televisies ingekocht.</h1>
            <h1>Er moeten nog <span className="red">{toBeSold}</span> televisies verkocht worden.</h1>
            <h1>{bestTV}</h1>
        </>
    )
}

export default App
