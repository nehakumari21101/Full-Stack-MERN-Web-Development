import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = ()=>{
    return(
        <div>
        <h1>Hello, I am React with Vite!</h1>
        </div>
    )
}

// const heading = React.createElement("h1",{}, "Hello React+vite!")

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);