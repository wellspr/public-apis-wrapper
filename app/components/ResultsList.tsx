import { FC } from "react";
import Card from "./Card";
import { Entry } from "~/routes/$category";

interface ResultsListProps {
    results: Entry[];
}

const ResultsList: FC<ResultsListProps> = ({ results }) => {

    if (!results) return <div className="results"><span className="no-results">No results</span></div>;

    const categoriesList = [
        ...new Set(
            results.map(item => {
                return item.category;
            })
        )];

    return (
        <section id="results" className="results">
            <span className="search-results-info">
                {"Found "}
                <b>{results.length}</b> {results.length > 1 ? " results " : " result "}
                { "in " }
                <b>{categoriesList.length}</b> {categoriesList.length > 1 ? " categories" : " category"}.
            </span>
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
            <ul className="results-list">
                {
                    Object.values(results).map((entry, index) => {
                        return (
                            <li className="result-item" key={index}>
                                <Card entry={entry} />
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
};

export default ResultsList;