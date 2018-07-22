import React from "react";
import ReactDom from "react-dom";

const Test = () => {
  return <div>Hello from the test component</div>
}

ReactDom.render(<Test />, document.getElementById("index"));