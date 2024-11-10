import './App.css';
import productsSold from "./helpers/productsSold.js";
import productsBought from "./helpers/productsBought.js";


function App() {
    const soldTVs = productsSold();
    const boughtTVs = productsBought();
    return (
        <>
            <h1>Er zijn <span className="green">{soldTVs}</span> televisies verkocht.</h1>
            <h1>Er zijn <span className="blue">{boughtTVs}</span> televisies ingekocht.</h1>
        </>
    )
}

export default App
