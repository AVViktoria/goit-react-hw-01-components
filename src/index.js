// import React from "react";
// // import React, { Components } from "react";
// import ReactDOM from "react-dom";
// // // import { render } from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App.js";

const container = document.querySelector("#root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// ReactDOM.render(<App />, document.querySelector("#root"));
