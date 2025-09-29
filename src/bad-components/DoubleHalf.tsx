import React from "react";
import { Button } from "react-bootstrap";
import DoubleState from "./DoubleHalfState";

function Doubler({ double }: { double: () => void }): React.JSX.Element {
    return <Button onClick={double}>double</Button>;
}

function Halver({ half }: { half: () => void }): React.JSX.Element {
    return <Button onClick={half}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const { dhValue, double, half } = DoubleState(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler double={double}></Doubler>
            <Halver half={half}></Halver>
        </div>
    );
}
