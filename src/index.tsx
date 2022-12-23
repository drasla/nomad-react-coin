import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <>
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <HelmetProvider>
                        <App />
                    </HelmetProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </React.StrictMode>
    </>,
);
