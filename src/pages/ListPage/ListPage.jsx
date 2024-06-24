import CategoryList from "../../components/CategoryList/CategoryList";
import Pagination from "../../components/Pagination/Pagination";
import BlogList from "../../components/BlogList/BlogList";
import { useContext, useState } from "react";
import { BlogListStateContext, CategoryListStateContext } from "../../App";

const ListPage = () => {
    const blogList = useContext(BlogListStateContext);
    const categoryList = useContext(CategoryListStateContext);
    const [selectCategory, setSelectCategory] = useState("전체");

    // 카테고리 리스트에서 클릭하면, 선택한 카테고리의 값을 가져와야함.
    const onClickChangeCategory = (name) => {
        setSelectCategory(name);
    };

    return (
        <div className="list_container">
            <CategoryList
                selectCategory={selectCategory}
                categoryList={categoryList}
                onClickChangeCategory={onClickChangeCategory}
            />
            <BlogList blogList={blogList} />
            <Pagination />
        </div>
    );
};

export default ListPage;
