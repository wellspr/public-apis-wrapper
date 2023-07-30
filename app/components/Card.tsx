import { FC } from "react";
import { Entry } from "~/routes/$category";

interface CardProps {
    entry: Entry;
}

const Card: FC<CardProps> = ({ entry }) => {

    if (!entry) return null;

    return <div className="card">
        <div className="card__title">{entry.title}</div>
        <div className="card__description">{entry.description}</div>
        <a href={entry.url} target="_blank" className="card__link">{entry.url}</a>
        <div className="card__category">{entry.category}</div>
        <div className="card__details">
            <div className="card__details__auth">Auth: {entry.auth}</div>
            <div className="card__details__https">HTTPS: {entry.https}</div>
            <div className="card__details__cors">Cors: {entry.cors}</div>
        </div>
    </div>;
};

export default Card;