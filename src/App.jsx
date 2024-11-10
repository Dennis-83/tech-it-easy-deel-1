import './App.css';
import productsSold from "./helpers/productsSold.js";

function App() {
    const soldTVs = productsSold();
    return (
        <>
            <h1>Er zijn <span className="green">{soldTVs}</span> televisies verkocht.</h1>

        </>
    )

}

export default App
