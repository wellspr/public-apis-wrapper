import { LoaderArgs } from "@remix-run/node";
import { json, useLoaderData } from "react-router";
import CategoriesList from "~/components/CategoriesList";
import ResultsList from "~/components/ResultsList";
import CategoryPage from "~/pages/CategoryPage";

import baseURL from "~/config/baseURL";

export const loader = async ({ params, request }: LoaderArgs) => {
    const category = params.category;

    console.log(category, request.url);

    const response = await fetch(`${baseURL()}/api/${category}`);

    const { results } = await response.json();

    return json(results);
};

export type Entry = {
    title: string;
    auth: string;
    category: string;
    cors: string;
    description: string;
    https: boolean;
    url: string;
}

const Category = () => {
    
    /* https://bobbyhadz.com/blog/typescript-type-unknown-is-not-assignable-to-type */

    const results: unknown = useLoaderData();

    const apisList: Entry[] = results as Entry[];

    return (
        <CategoryPage>
            <CategoriesList />
            <ResultsList results={apisList} />
        </CategoryPage>
    );
};

export default Category;