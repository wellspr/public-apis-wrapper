import { FC } from "react";
import CategoriesList from "~/components/CategoriesList";
import Search from "~/components/SearchBar";

const HomePage: FC = () => {
    return (
        <div className="homepage">

            <Search />

            <h1 className="homepage__heading">APIs categories</h1>
            <CategoriesList />
        </div>
    );
};

export default HomePage;