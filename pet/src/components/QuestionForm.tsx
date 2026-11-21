import { useState } from "react";

type Props = {
    onAsk: (question: string) => void;
};

export default function QuestionForm({ onAsk }: Props) {
    const [question, setQuestion] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!question.trim()) return;

        onAsk(question.trim());
        setQuestion("");
    };

    return (
        <form className="question-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Задай своє питання..."
                required
            />

            <button type="submit">Запитати</button>
        </form>
    );
}
