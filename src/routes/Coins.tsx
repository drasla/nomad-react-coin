import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgColor};
    border-radius: 15px;
    margin-bottom: 10px;
    border: 1px solid white;

    a {
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in;
    }

    &:hover {
        a {
            color: ${props => props.theme.accentColor};
        }
    }
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins(props: { toggleDark: VoidFunction }) {
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

    return (
        <Container>
            <Helmet>
                <title>코인</title>
            </Helmet>
            <Header>
                <Title>코인</Title>
                <button onClick={props.toggleDark}>Toggle Dark Mode</button>
            </Header>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <CoinList>
                    {data &&
                        data.slice(0, 100).map(value => (
                            <Coin key={value.id}>
                                <Link
                                    to={{ pathname: `/${value.id}` }}
                                    state={{ name: value.name }}>
                                    <Img
                                        src={`https://coinicons-api.vercel.app//api/icon/${value.symbol.toLowerCase()}`}
                                    />
                                    {value.name} &rarr;
                                </Link>
                            </Coin>
                        ))}
                </CoinList>
            )}
        </Container>
    );
}

export default Coins;
