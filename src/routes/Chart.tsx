import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

function Chart(props: { coinId: string }) {
    const { isLoading, data } = useQuery(["ohlcv", props.coinId], () =>
        fetchCoinHistory(props.coinId),
    );

    return <h1>Chart</h1>;
}

export default Chart;
