import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidayList = [
        "Christmas",
        "Easter",
        "Halloween",
        "New Year's Day",
        "Thanksgiving",
    ];

    const [activeHoliday, setActiveHoliday] = useState<string>("Christmas");

    const nextAlphabetical = () => {
        const idx = holidayList.indexOf(activeHoliday);
        const nextIdx = (idx + 1) % holidayList.length;
        setActiveHoliday(holidayList[nextIdx]);
    };

    const nextByYear = () => {
        const idx = holidayList.indexOf(activeHoliday);
        const nextIdx = (idx + 1) % holidayList.length;
        setActiveHoliday(holidayList[nextIdx]);
    };

    return (
        <div>
            <span>Holiday: {activeHoliday}</span>
            <div>
                <Button onClick={nextAlphabetical}>Alphabet</Button>
                <Button onClick={nextByYear}>Year</Button>
            </div>
        </div>
    );
}
