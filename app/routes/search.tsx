import { LoaderArgs, V2_MetaFunction, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import SearchBar from "~/components/SearchBar";
import ResultsList from "~/components/ResultsList";
import { Entry } from "./$category";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Search APIs" },
        { name: "description", content: "Search the public apis" },
    ];
};  

import baseURL from "~/config/baseURL";

export const action = async ({ request }: LoaderArgs) => {

    const body = await request.formData();

    const term = body.get("term");
    const title = body.get("title");
    const description = body.get("description");

    const field = 
        title && description ? "search" :
        title && "title" || 
        description && "description";

    const base = baseURL();
    const url = new URL(`/api?${field}=${term}`, base);

    const apiURL = url;

    const response = await fetch(apiURL);

    const { results } = await response.json(); 

    return json(results);
};

const Search = () => {

    const r: unknown = useActionData();

    const results: Entry[] = r as Entry[];

    return (
        <div className="search">
            <SearchBar />
            <ResultsList results={results} />
        </div>
    );
};

export default Search;