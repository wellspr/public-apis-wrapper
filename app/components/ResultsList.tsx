import { FC } from "react";
import Result from "./Result";
import { Entry } from "~/routes/$category";

interface ResultsListProps {
    results: Entry[];
}

const ResultsList: FC<ResultsListProps> = ({ results }) => {

    if (!results) return null;

    const categoriesList = [
        ...new Set(
            results.map(item => {
                return item.Category;
            })
        )];

    return (
        <div className="categories-results">
            <h2 className="results__heading">
                <span className="results__label">
                    {
                        categoriesList.length > 1 ? "Categories: " : "Category: "
                    }
                </span>
                <span className="results__name">
                    {
                        categoriesList.map(category => {
                            return <span key={category} className="item">{category}</span>;
                        })
                    }
                </span>
            </h2>
            <ul className="results">
                {
                    Object.values(results).map((entry, index) => {
                        return (
                            <li className="result" key={index}>
                                <Result entry={entry} />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default ResultsList;