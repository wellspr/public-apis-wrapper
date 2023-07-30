import { type V2_MetaFunction } from "@remix-run/node";
import HomePage from "~/pages/HomePage";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Public APIs App Project" },
        { name: "description", content: "A wrapper for the public apis project" },
    ];
};    

export default function Index() {

    return <HomePage />
};
