import React from "react";
import ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";


ReactDOM.render(
    //Provider는 store라고 하는게 필요함
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root"));