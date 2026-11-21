
type Props = {
    question: string;
    answer: string;
};

export default function PetAnswer({ question, answer }: Props) {
    return (
        <div className="pet-answer">
            <div className="question">
                <strong>Ти запитуєш:</strong>
                <p>{question}</p>
            </div>

            <div className="answer">
                <strong>Улюбленець відповідає:</strong>
                <p>{answer}</p>
            </div>
        </div>
    );
}
