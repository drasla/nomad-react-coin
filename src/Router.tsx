import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Coins from "routes/Coins";
import Coin from "./routes/Coin";

function Router() {
    return (
        <BrowserRouter>
            <Route path={"/:coinId"} element={<Coin />} />
            <Route path={"/"} element={<Coins />} />
        </BrowserRouter>
    );
}

export default Router;
