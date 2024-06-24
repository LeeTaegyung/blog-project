import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BlogListDispatchContext, BlogListStateContext } from "../../App";
import Form from "../../components/Form/Form";

const EditPage = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const blogList = useContext(BlogListStateContext);
    const { onBlogUpdate } = useContext(BlogListDispatchContext);
    const [currentBlogItem, setCurrentBlogItem] = useState();

    useEffect(() => {
        const getFindBlogItem = (id) => {
            return blogList.find((blog) => Number(blog.id) === Number(id));
        };

        const findBlogItem = getFindBlogItem(id);
        // 포스팅글을 찾지 못하였을때
        if (!findBlogItem) {
            alert("포스팅을 찾지 못하였습니다.");
            nav("/", { replace: true });
        }
        // 찾았다면, state 업데이트
        setCurrentBlogItem(findBlogItem);
    }, []);

    if (!currentBlogItem) return <div>로딩중입니다...</div>;

    const onSubmit = (item) => {
        onBlogUpdate(item);
    };

    return (
        <div className="edit_container">
            <Form editData={currentBlogItem} onSubmit={onSubmit} />
        </div>
    );
};

export default EditPage;
