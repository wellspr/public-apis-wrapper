import { LoaderArgs, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import SearchBar from "~/components/SearchBar";
import { Entry } from "./$category";
import ResultsList from "~/components/ResultsList";

export const action = async ({ request }: LoaderArgs) => {

    const body = await request.formData();

    const term = body.get("term");
    const field = body.get("field");

    const apiURL = `https://api.publicapis.org/entries?${field}=${term}`;

    const response = await fetch(apiURL);

    const { entries } = await response.json(); 

    return json(entries);
};

const Search = () => {

    const entries: unknown = useActionData();

    const results: Entry[] = entries as Entry[];

    return (
        <div className="search">
            <SearchBar />
            <ResultsList results={results} />
        </div>
    );
};

export default Search;