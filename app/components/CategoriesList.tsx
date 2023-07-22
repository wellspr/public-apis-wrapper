import { Link, useLocation, useRouteLoaderData } from "@remix-run/react";
import { FC } from "react";

export interface CategoriesProps {
    categories: string[];
}

const CategoriesList: FC = () => {

    const categories: unknown = useRouteLoaderData("root");

    const list: string[] = categories as string[];

    const { state } = useLocation();

    return (
        <ul className="categories">
            {
                Object.values(list).map(entry => {
                    return (
                        <li key={entry} className="category">
                            <Link
                                to={`/${entry.toLowerCase().split(" ")[0]}`}
                                state={{ category: entry }}
                            >
                                <span className={ state.category === entry ? `category__selected` : "" }>
                                    {entry}
                                </span>
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default CategoriesList;