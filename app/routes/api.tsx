import { LoaderArgs, json } from "@remix-run/node";

import apis from "../data/apis-list.json";

export const loader = async ({ request }: LoaderArgs) => {

    const url = new URL(request.url);
    const title = url.searchParams.get("title");
    const description = url.searchParams.get("description");
    const search = url.searchParams.get("search");
    const category = url.searchParams.get("category");
        
    let results = apis;

    if (category) {
        results = apis.filter(api => {
            return api.category.toLowerCase().includes(category.toLowerCase());
        });
    }

    else if (title && description) {
        results = apis.filter(api => {
            return api.title.toLowerCase().includes(title.toLowerCase()) || api.description.toLowerCase().includes(description.toLowerCase());
        });
    }

    else if (title) {
        results = apis.filter(api => {
            return api.title.toLowerCase().includes(title.toLowerCase());
        });
    }

    else if (description) {
        results = apis.filter(api => {
            return api.description.toLowerCase().includes(description.toLowerCase());
        });
    } 
    
    else if (search) {
        results = apis.filter(api => {
            return api.title.toLowerCase().includes(search.toLowerCase()) || api.description.toLowerCase().includes(search.toLowerCase());
        });
    }

    const count = results.length;

    return json({ count, results });
};