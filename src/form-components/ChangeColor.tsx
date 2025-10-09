import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
];

const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((c: string) => (
                    <Form.Check
                        inline
                        key={c}
                        type="radio"
                        name="colors"
                        label={c}
                        value={c}
                        checked={color === c}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setColor(e.target.value);
                        }}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: "white",
                    width: "120px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                }}
            >
                {color}
            </div>
        </div>
    );
}
