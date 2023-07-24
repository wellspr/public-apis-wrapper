import { FC } from "react";
import CategoriesList from "~/components/CategoriesList";
import Search from "~/components/SearchBar";

const HomePage: FC = () => {
    return (
        <div className="homepage">

            <h1 className="homepage__heading">
                <span className="homepage__heading--main">Find free public APIs for your project</span>
                <span className="homepage__heading--sub">A frontend wrapper for the <a href="https://github.com/davemachado/public-api">public apis</a> api</span>
            </h1>

            <Search />

            <h2 className="homepage__heading">APIs categories</h2>
            <CategoriesList />
        </div>
    );
};

export default HomePage;