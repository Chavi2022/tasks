import React, { useState } from "react";
// import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2); 

    const win = left === right && left !== 1;
    const lose = left === 1 && right === 1;

    return (
        <div>
            <button
                onClick={() => {
                    setLeft(d6());
                    setRight(d6());
                }}
            >
                Roll Dice
            </button>
            <button
                onClick={() => {
                    setLeft(d6());
                }}
            >
                Roll Left
            </button>
            <button
                onClick={() => {
                    setRight(d6());
                }}
            >
                Roll Right
            </button>
            <span data-testid="left-die">Left Die: {left}</span>
            <span data-testid="right-die">Right Die: {right}</span>
            <span>What You Rolled: {left + right} </span>
            {win && <div>You Win!</div>}
            {lose && <div>You Lose!</div>}
        </div>
    );
}
