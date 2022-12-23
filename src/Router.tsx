import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router(props: { toggleDark: VoidFunction; isDark: boolean }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/:coinId/*"} element={<Coin isDark={props.isDark} />} />
                <Route path={"/"} element={<Coins toggleDark={props.toggleDark} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
