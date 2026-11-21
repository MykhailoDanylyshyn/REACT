
import { useState } from "react";

import PetAvatar from "./PetAvatar";
import PetType from "./PetType";
import PetName from "./PetName";

import dog from "../assets/01_dog.png";
import cat from "../assets/02_cat.png";
import rabbit from "../assets/03_rabbit.png";
import hamster from "../assets/04_hamster.png";
import guineaPig from "../assets/05_guinea_pig.png";
import parrot from "../assets/06_parrot.png";
import frog from "../assets/07_frog.png";
import turtle from "../assets/08_turtle.png";
import snake from "../assets/09_snake.png";
import otter from "../assets/10_otter.png";
import goldfish from "../assets/11_goldfish.png";
import chameleon from "../assets/12_chameleon.png";

export type PetData = {
    name: string;
    type: string;
    greeting: string;
    status: string;
    image: string;
};

const pets = [
    {
        type: "Пес",
        greeting: "твій пес",
        status: "Професійний мисливець за смаколиками 🦴",
        image: dog
    },
    {
        type: "Кіт",
        greeting: "твій кіт",
        status: "Головний у цьому домі 👑",
        image: cat
    },
    {
        type: "Кролик",
        greeting: "твій кролик",
        status: "Стрибун на повну ставку 🥕",
        image: rabbit
    },
    {
        type: "Хом'як",
        greeting: "твій хом'як",
        status: "Запасаю смаколики на чорний день 🌻",
        image: hamster
    },
    {
        type: "Морська свинка",
        greeting: "твоя морська свинка",
        status: "Експерт із хрумкання 🥬",
        image: guineaPig
    },
    {
        type: "Папуга",
        greeting: "твій папуга",
        status: "Твій персональний балакун 🦜",
        image: parrot
    },
    {
        type: "Жаба",
        greeting: "твоя жаба",
        status: "Майстер великих стрибків 🐸",
        image: frog
    },
    {
        type: "Черепаха",
        greeting: "твоя черепаха",
        status: "Не поспішай, я нікуди не поспішаю 🐢",
        image: turtle
    },
    {
        type: "Змія",
        greeting: "твоя змія",
        status: "Холоднокровний професіонал 🐍",
        image: snake
    },
    {
        type: "Видра",
        greeting: "твоя видра",
        status: "Професійний плавець і бешкетник 🦦",
        image: otter
    },
    {
        type: "Золота рибка",
        greeting: "твоя золота рибка",
        status: "Виконую бажання... іноді 🫧",
        image: goldfish
    },
    {
        type: "Хамелеон",
        greeting: "твій хамелеон",
        status: "Майстер маскування 🦎",
        image: chameleon
    }
];

type Props = {
    onCreate: (pet: PetData) => void;
};

export default function PetForm({ onCreate }: Props) {
    const [selectedPet, setSelectedPet] = useState(0);
    const [name, setName] = useState("");

    const prevPet = () => {
        setSelectedPet((prev) =>
            prev === 0 ? pets.length - 1 : prev - 1
        );
    };

    const nextPet = () => {
        setSelectedPet((prev) =>
            prev === pets.length - 1 ? 0 : prev + 1
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name.trim()) return;

        onCreate({
            name: name.trim(),
            type: pets[selectedPet].type,
            greeting: pets[selectedPet].greeting,
            status: pets[selectedPet].status,
            image: pets[selectedPet].image
        });
    };

    return (
        <form className="pet-form" onSubmit={handleSubmit}>
            <h2>Створи свого улюбленця!</h2>

            <PetAvatar image={pets[selectedPet].image} />

            <PetType
                type={pets[selectedPet].type}
                onPrev={prevPet}
                onNext={nextPet}
            />

            <PetName name={name} setName={setName} />

            <button type="submit" className="submit-button">
                Створити улюбленця
            </button>
        </form>
    );
}
