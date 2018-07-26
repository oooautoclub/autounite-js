import React from "react";
import ReactDOM from "react-dom";
import AppInit from "./AppInit";
import {ChainConfig} from "bitsharesjs-ws";

ChainConfig.networks = {
    AUNIT: {
        core_asset: "AUNIT",
        address_prefix: "AUNIT",
        chain_id:
            "73d544cb0b2cc6f8074d1ee90dc25d546dbf4ab27aa5a11eb61eaa5e39cea4b5"
    }
};

if (__PERFORMANCE_DEVTOOL__) {
    const {registerObserver} = require("react-perf-devtool");
    registerObserver();
}

const rootEl = document.getElementById("content");
const render = () => {
    ReactDOM.render(<AppInit />, rootEl);
};
render();
