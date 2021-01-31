import React from "react";
import Jumbotron from "./components/Jumbotron";
import DirectoryContainer from "./components/DirectoryContainer";

const styles = {
    backgroundColor: "#cccccc",
}

function App() {
    return (
        <div style={styles}>
            <Jumbotron />
            <DirectoryContainer />  
        </div>
    )
}

export default App;