import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/login";

export function StartApp(props) {
  const isLoggedIn = false;
  //console.log(props.validate);
  if (isLoggedIn) {
    return <Login />;
  }
  return <App />;
}

ReactDOM.render(<StartApp />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
