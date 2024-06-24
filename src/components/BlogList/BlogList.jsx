import "./BlogList.css";
import { Link } from "react-router-dom";
import BlogItem from "../BlogItem/BlogItem";

const BlogList = ({ blogList }) => {
    return (
        <>
            <ul className="blog_list">
                {blogList.length ? (
                    blogList.map((blog) => <BlogItem key={blog.id} {...blog} />)
                ) : (
                    <li className="blank">
                        <p>포스팅 된 글이 없습니다.</p>
                    </li>
                )}
            </ul>
            <div className="blog_list_util">
                <Link to="/write" className="btn write_btn">
                    글쓰기
                </Link>
            </div>
        </>
    );
};

export default BlogList;
