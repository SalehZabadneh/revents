import React from "react";
import "./index.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";

const rootEl = ReactDOM.createRoot(document.getElementById("root"));
// rootEl.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const render = () => {
  rootEl.render(<App />);
};
if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
