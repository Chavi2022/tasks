import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const typeNames: Record<QuestionType, string> = {
    short_answer_question: "Short Answer",
    multiple_choice_question: "Multiple Choice",
};

export function ChangeType(): React.JSX.Element {
    const types: QuestionType[] = [
        "short_answer_question",
        "multiple_choice_question",
    ];
    const [idx, setIdx] = useState<number>(0);
    return (
        <div>
            <span>Type: {typeNames[types[idx]]}</span>
            <Button
                onClick={() => {
                    setIdx((idx + 1) % types.length);
                }}
            >
                Change Type
            </Button>
        </div>
    );
}
