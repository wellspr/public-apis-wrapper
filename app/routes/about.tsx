import { V2_MetaFunction } from "@remix-run/node";
import AboutPage from "~/pages/AboutPage";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "About" },
        { name: "description", content: "About the Public APIs App project" },
    ];
};  

export default function About() {
    return <AboutPage />
};