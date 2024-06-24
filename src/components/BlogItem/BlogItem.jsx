import "./BlogItem.css";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

const BlogItem = ({ category, content, date, img, title, id }) => {
    // console.log(img);
    console.log(content);
    return (
        <li>
            <Link to={`/view/${id}`} className="blog_item">
                {img ? (
                    <figure className="img_box">
                        <img src={img} alt="" />
                    </figure>
                ) : null}
                <div className="text_box">
                    <span className="category">{category}</span>
                    <h2 className="title">{title}</h2>
                    <p className="content">
                        <Markdown>{content}</Markdown>
                    </p>
                    <span className="date">
                        {new Date(date).toLocaleDateString()}
                    </span>
                </div>
            </Link>
        </li>
    );
};

export default BlogItem;
