import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
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
        </div>
    );
}

export default App;
