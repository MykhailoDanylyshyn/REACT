
import type { PetData } from "./PetForm";
import PetAnswer from "./PetAnswer";

type Props = {
    pet: PetData;
    question: string;
    answer: string;
};

export default function PetCard({ pet, question, answer }: Props) {
    return (
        <div className="pet-card">
            <img src={pet.image} alt={pet.type} />

            <h2>{pet.name}</h2>

            <p className="pet-status">{pet.status}</p>

            <h3>Наше спілкування</h3>

            {question && (
                <PetAnswer
                    question={question}
                    answer={answer}
                />
            )}
        </div>
    );
}
