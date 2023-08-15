import { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "react-router";
import CategoriesList from "~/components/CategoriesList";
import ResultsList from "~/components/ResultsList";
import CategoryPage from "~/pages/CategoryPage";

import baseURL from "~/config/baseURL";

export const loader = async ({ params }: LoaderArgs) => {
    const category = params.category;

    const response = await fetch(`${baseURL()}/api/${category}`);

    const { results } = await response.json();

    return json(results);
};

export const meta: V2_MetaFunction<typeof loader> = ({ params }) => {
    return [
        { title: params.category },
        { name: "description", content: `Results for category '${params.category}'` },
    ];
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