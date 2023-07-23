import { FC, ReactNode } from "react";

interface CategoryPageProps {
    children: ReactNode;
}

const CategoryPage:FC<CategoryPageProps> = ({ children }) => {

    return <div className="category">
        { children }
    </div>
};

export default CategoryPage;