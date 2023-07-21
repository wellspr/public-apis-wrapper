import { FC } from "react";
import { Entry } from "~/routes/$category";

interface ResultProps {
    entry: Entry;
}

const Result: FC<ResultProps> = ({ entry }) => {

    if (!entry) return null;

    return <div className="api">
        <div className="api__title">{entry.API}</div>
        <div className="api__description">{entry.Description}</div>
        <a href={entry.Link} target="_blank" className="api__link">{entry.Link}</a>
        <div className="api__category">{entry.Category}</div>
        <div className="api__details">
            <div className="api__details__auth">Auth: {entry.Auth}</div>
            <div className="api__details__https">HTTPS: {entry.HTTPS}</div>
            <div className="api__details__cors">Cors: {entry.Cors}</div>
        </div>
    </div>;
};

export default Result;