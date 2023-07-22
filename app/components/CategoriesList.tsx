import { Link, useRouteLoaderData } from "@remix-run/react";
import { FC } from "react";

export interface CategoriesProps {
    categories: string[];
}

const CategoriesList: FC = () => {

    const categories: unknown = useRouteLoaderData("root");

    const list: string[] = categories as string[];

    const renderCategoriesList = Object.values(list).map(entry => {
        return (
            <li key={entry} className="category">
                <Link 
                    to={`/${entry.toLowerCase().split(" ")[0]}`}
                    state={{ category: entry }}
                    >
                    {entry}
                </Link>
            </li>
        );
    });

    return (
        <ul className="categories">
            {renderCategoriesList}
        </ul>
    );
};

export default CategoriesList;