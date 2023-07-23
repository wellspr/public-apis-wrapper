import { FC } from "react";
import { Entry } from "~/routes/$category";

interface CardProps {
    entry: Entry;
}

const Card: FC<CardProps> = ({ entry }) => {

    if (!entry) return null;

    return <div className="card">
        <div className="card__title">{entry.API}</div>
        <div className="card__description">{entry.Description}</div>
        <a href={entry.Link} target="_blank" className="card__link">{entry.Link}</a>
        <div className="card__category">{entry.Category}</div>
        <div className="card__details">
            <div className="card__details__auth">Auth: {entry.Auth}</div>
            <div className="card__details__https">HTTPS: {entry.HTTPS}</div>
            <div className="card__details__cors">Cors: {entry.Cors}</div>
        </div>
    </div>;
};

export default Card;