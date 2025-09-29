import { useState } from "react";

function DoubleState({ initVal = 10 }) {
    const [dhValue, setDhValue] = useState(initVal);
    const half = () => {
        setDhValue(dhValue / 2);
    };
    const double = () => {
        setDhValue(dhValue * 2);
    };
    return { dhValue, half, double, setDhValue };
}
export default DoubleState;
