import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attempts}</div>
            <Form.Group controlId="formRequestedAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setRequested(e.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    const amount = parseInt(requested);
                    if (!isNaN(amount)) {
                        setAttempts(attempts + amount);
                    }
                }}
            >
                gain
            </Button>
        </div>
    );
}
