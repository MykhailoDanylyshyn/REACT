import { Component } from "react";
import "./ingredients.css";

class Ingredients extends Component {
    render() {
        return (
            <section className="ingredients">
                <h2>Інгредієнти</h2>

                <ul>
                    <li>Борошно — 500 г</li>
                    <li>Вода — 200 мл</li>
                    <li>Яйце — 1 шт.</li>
                    <li>Свинина — 300 г</li>
                    <li>Яловичина — 200 г</li>
                    <li>Цибуля — 1 шт.</li>
                    <li>Сіль — 1 ч. л.</li>
                    <li>Чорний перець — за смаком</li>
                </ul>
            </section>
        );
    }
}

export default Ingredients;