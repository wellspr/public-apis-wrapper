import { LoaderArgs } from "@remix-run/node";
import { json, useLoaderData } from "react-router";
import CategoriesList from "~/components/CategoriesList";
import ResultsList from "~/components/ResultsList";
import CategoryPage from "~/pages/CategoryPage";

export const loader = async ({ params }: LoaderArgs) => {
    const category = params.category;

    const response = await fetch(`https://api.publicapis.org/entries?category=${category}`);

    const { entries } = await response.json();

    return json(entries);
};

export type Entry = {
    API: string;
    Auth: string;
    Category: string;
    Cors: string;
    Description: string;
    HTTPS: boolean;
    Link: string;
}

const Category = () => {
    
    /* https://bobbyhadz.com/blog/typescript-type-unknown-is-not-assignable-to-type */

    const entries: unknown = useLoaderData();

    const apisList: Entry[] = entries as Entry[];

    return (
        <CategoryPage>
            <CategoriesList />
            <ResultsList results={apisList} />
        </CategoryPage>
    );
};

export default Category;