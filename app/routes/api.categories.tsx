import { json } from "@remix-run/node";
import apis from "../data/apis-list.json";

export const loader = async () => {

    let currentCategory = "";
    const categories: string[] = [];

    apis.forEach(api => {
        if (api.category !== currentCategory) {
            currentCategory = api.category;
            categories.push(api.category);
        }
    });

    const count = categories.length;

    return json({count, categories});
};