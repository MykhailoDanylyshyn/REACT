import { Component } from "react";
import "./photo.css";
import pelmeniImage from "../assets/pelmeni.jpg";

class Photo extends Component {
    render() {
        return (
            <section className="recipe-photo">
                <h2>Готові пельмені</h2>

                <img
                    src={pelmeniImage}
                    alt="Тарілка домашніх пельменів"
                />
            </section>
        );
    }
}

export default Photo;