import * as React from "react";
import * as ReactDom from "react-dom";

import * as GraphQL from "./GraphQL";

import App from "./Components/App";
import "./index.scss";

ReactDom.render(<App />, document.getElementById("app"));
