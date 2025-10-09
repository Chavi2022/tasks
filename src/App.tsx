import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript-Luis Infantes
            </header>
            {/* headers */}
            <h1>This is header text</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            {/* Bootstrap button for logging Hello World */}
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <p>Hello World!</p>
            {/* text paragraph */}
            <p>
                This is just a paragraph of text. It can go onto multiple lines,
                if you want.
            </p>
            {/* two column layout*/}
            <div>
                <Container>
                    <Row>
                        <Col>First column.</Col>
                        <Col>67</Col>
                    </Row>
                </Container>
            </div>
            {/*div  */}
            <div>
                <p>How are you doing today?</p>
            </div>
            {/*fragments */}
            <>
                <img
                    src="../assets/images/pet-ada.jpg"
                    alt="A picture of my dog Ada"
                />
            </>
            {/* add border and padding */}
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                this will be surrounded by a border and padding.
            </div>
            {/*make test red*/}
            <div>
                This is <span style={{ color: "red" }}>colored text</span>.
            </div>
            {/*element with red background for CSS test */}
            <div
                style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "4px",
                }}
            >
                This element has a red background.
            </div>
            {/*single list with at least three elements */}
            <div>
                <ul>
                    <li>1</li>
                    <li>1 again</li>
                    <li>1 again</li>
                </ul>
            </div>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
