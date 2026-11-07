import "./App.css";

import Header from "./components/header";
import Ingredients from "./components/ingredients";
import Preparation from "./components/preparation";
import Photo from "./components/photo";

function App() {
    return (
        <div className="app">
            <Header />
            <Ingredients />
            <Preparation />
            <Photo />
        </div>
    );
}

export default App;