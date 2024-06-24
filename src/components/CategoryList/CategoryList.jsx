import "./CategoryList.css";

const CategoryList = ({
    selectCategory,
    categoryList,
    onClickChangeCategory,
}) => {
    return (
        <div className="category_list">
            <button
                className={`category_btn ${
                    selectCategory === "전체" ? "on" : null
                }`}
                onClick={() => {
                    onClickChangeCategory("전체");
                }}
            >
                전체
            </button>
            {categoryList.map((category) => (
                <button
                    key={category.id}
                    className={`category_btn ${
                        selectCategory === category.name ? "on" : null
                    }`}
                    onClick={() => {
                        onClickChangeCategory(category.name);
                    }}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryList;
