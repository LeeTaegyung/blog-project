import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import {
    createContext,
    useEffect,
    useMemo,
    useState,
    useCallback,
    useRef,
} from "react";

const mockData = [
    {
        id: 1,
        title: "블로그 제목입니다.",
        content: "블로그 내용이 들어갑니다.",
        date: new Date().getTime(),
        category: "개발",
        img: undefined,
    },
    {
        id: 2,
        title: "4월의 대만여행 후기",
        content: "4월말 N년만에 해외여행을 간다!!!",
        date: new Date().getTime(),
        category: "여행",
        img: undefined,
    },
    {
        id: 3,
        title: "0516, 아이유 생일 카페 후기",
        content:
            "이 사건은 아이유의 생일카페 역조공 포카를 얻기 위한 한 유애나의 의지에서 발생한 사건이다.",
        date: new Date().getTime(),
        category: "덕질",
        img: undefined,
    },
];

const categoryBasic = [
    { id: 1, name: "React" },
    { id: 2, name: "JS" },
    { id: 3, name: "HTML/CSS" },
    { id: 4, name: "덕질" },
    { id: 5, name: "여행" },
    { id: 6, name: "개발" },
];

export const BlogListStateContext = createContext();
export const BlogListDispatchContext = createContext();
export const CategoryListStateContext = createContext();

function App() {
    const router = createBrowserRouter(routes);
    const idRef = useRef(4);
    const [categoryList, setCategoryList] = useState(categoryBasic);
    const [blogList, setBlogList] = useState(mockData);
    // blog 추가
    const onBlogCreate = (item) => {
        const newItem = {
            ...item,
            id: idRef.current++,
        };
        setBlogList([...blogList, newItem]);
    };
    // blog 삭제
    const onBlogDelete = (id) => {
        setBlogList(blogList.filter((blog) => Number(blog.id) !== Number(id)));
    };
    // blog 수정
    const onBlogUpdate = (item) => {
        setBlogList(
            blogList.map((blog) =>
                Number(blog.id) === Number(item.id) ? item : blog
            )
        );
    };

    return (
        <>
            <BlogListStateContext.Provider value={blogList}>
                <CategoryListStateContext.Provider value={categoryList}>
                    <BlogListDispatchContext.Provider
                        value={{
                            onBlogCreate,
                            onBlogDelete,
                            onBlogUpdate,
                        }}
                    >
                        <RouterProvider router={router} />
                    </BlogListDispatchContext.Provider>
                </CategoryListStateContext.Provider>
            </BlogListStateContext.Provider>
        </>
    );
}

export default App;
