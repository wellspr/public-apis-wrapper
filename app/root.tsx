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
        { rel: "stylesheet", href: styles },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
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
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
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
