
import { useState } from "react";

import Header from "./components/Header";
import PetForm from "./components/PetForm";
import type { PetData } from "./components/PetForm";

import PetCard from "./components/PetCard";
import QuestionForm from "./components/QuestionForm";

import "./App.css";

const answers = [
    "Так, без сумнівів! 🐾",
    "Мені здається, що так!",
    "Однозначно!",
    "Звичайно!",
    "Не розраховуй на це!",
    "Можливо...",
    "Запитай мене пізніше!",
    "Я думаю, що ні.",
    "Навіть не сумнівайся!",
    "Мої лапки кажуть так!"
];

type PetProps = {
    pet: PetData;
};

function Pet({ pet }: PetProps) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const askQuestion = (text: string) => {
        const randomIndex = Math.floor(
            Math.random() * answers.length
        );

        setQuestion(text);
        setAnswer(answers[randomIndex]);
    };

    return (
        <div className="pet-container">
            <PetCard
                pet={pet}
                question={question}
                answer={answer}
            />

            <QuestionForm onAsk={askQuestion} />
        </div>
    );
}

export default function App() {
    const [pet, setPet] = useState<PetData | null>(null);

    return (
        <div className="app">
            <Header title={pet ? "Привіт!" : "Вітаємо!"} />

            <main>
                {pet === null ? (
                    <PetForm onCreate={setPet} />
                ) : (
                    <Pet pet={pet} />
                )}
            </main>
        </div>
    );
}
