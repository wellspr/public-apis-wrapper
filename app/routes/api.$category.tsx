import { LoaderArgs, json } from "@remix-run/node";
import apis from "../data/apis-list.json";

export const loader = async ({ params }: LoaderArgs) => {
    const category = params.category;

    const results = apis.filter(api => {
        return api.category.toLowerCase().replace(/ /g, "_") === category?.toLowerCase();
    });

    const count = results.length;

    return json({count, results});
};

