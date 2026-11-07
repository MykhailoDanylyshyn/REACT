import "./App.css";
import Header from "./components/Header";
import CityInfo from "./components/CityInfo";
import Places from "./components/Places";

export default function App() 
{
    return (
        <div className="App">
            <Header />
            <CityInfo />
            <Places />
        </div>
    )
    
}