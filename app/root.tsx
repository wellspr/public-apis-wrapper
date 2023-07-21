import styles from "./css/index.css";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import { json } from "@remix-run/node";

export const links = () => {
    return [{ rel: "stylesheet", href: styles }];
};

export const loader = async () => {

    const response = await fetch("https://api.publicapis.org/categories");

    const { categories } = await response.json();

    return json(categories);
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <div className="app">
                    <Header />
                    <Main>
                        <Outlet />
                    </Main>
                    <Footer />
                </div>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
