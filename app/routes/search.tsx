import { LoaderArgs, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import SearchBar from "~/components/SearchBar";
import ResultsList from "~/components/ResultsList";
import { Entry } from "./$category";

import baseURL from "~/config/baseURL";

export const action = async ({ request }: LoaderArgs) => {

    const body = await request.formData();

    const term = body.get("term");
    const field = body.get("field");

    const apiURL = `${baseURL()}/api?${field}=${term}`;

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