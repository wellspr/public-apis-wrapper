import styles from "./css/index.css";

import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import { json } from "@remix-run/node";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

import baseURL from "./config/baseURL";

export const links = () => {
    return [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "preload", as: "style", href: styles },
        { rel: "stylesheet", href: styles }
    ];
};

export const loader = async () => {

    const response = await fetch(`${baseURL()}/api/categories`);

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
};
