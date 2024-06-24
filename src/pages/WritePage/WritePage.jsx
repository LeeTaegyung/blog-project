import { useContext } from "react";
import { BlogListDispatchContext } from "../../App";
import Form from "../../components/Form/Form";

const WritePage = () => {
    const { onBlogCreate } = useContext(BlogListDispatchContext);
    const onSubmit = (item) => {
        onBlogCreate(item);
    };
    return (
        <div className="write_container">
            <Form onSubmit={onSubmit} />
        </div>
    );
};

export default WritePage;
