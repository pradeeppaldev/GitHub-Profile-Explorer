import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

function GitHubProfile(){
    // Header
    // Body: show 10 card

    return(
        <>
            <Header/>
            <Body/>
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<GitHubProfile/>);