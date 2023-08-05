import { Link, useMatches, useRouteLoaderData } from "@remix-run/react";
import { FC } from "react";

export interface CategoriesProps {
    categories: string[];
}

const CategoriesList: FC = () => {

    const categories: unknown = useRouteLoaderData("root");

    const list: string[] = categories as string[];

    const matches = useMatches();

    const category = matches[0].params.category;

    console.log(matches);

    return (
        <ul className="categories-list">
            {
                Object.values(list).map(entry => {
                    return (
                        <li
                            key={entry}
                            className={category?.toLowerCase() === entry.toLowerCase() ? `category category--selected` : "category"}
                        >
                            {
                                category?.toLowerCase() === entry.toLowerCase()
                                    ?
                                    <span>{entry}</span>
                                    :
                                    <Link className="category__link"
                                        to={`/${entry.toLowerCase().split(" ")[0]}`}>
                                        {entry}
                                    </Link>
                            }
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default CategoriesList;