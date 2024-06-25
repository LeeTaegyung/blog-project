import "./ViewPage.css";
// import thumbnail from "../../assets/images/thumbnail.jpeg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BlogListDispatchContext, BlogListStateContext } from "../../App";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ViewPage = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const blogList = useContext(BlogListStateContext);
  const { onBlogDelete } = useContext(BlogListDispatchContext);
  const [currentBlogItem, setCurrentBlogItem] = useState();

  useEffect(() => {
    const getFindBlogItem = (id) => {
      return blogList.find((blog) => blog.id === Number(id));
    };
    const findBlogItem = getFindBlogItem(id);
    // 포스팅이 없을때
    if (!findBlogItem) {
      alert("포스팅이 없습니다.");
      nav(-1, { replace: true });
    }

    setCurrentBlogItem(findBlogItem);
  }, []);

  // 데이터 로딩 중일때
  if (!currentBlogItem) return <div>로딩중입니다...</div>;

  const { title, content, date, category, img } = currentBlogItem;

  // blog 삭제
  const onClickDelete = () => {
    if (!confirm("정막 삭제 하시겠습니까?")) {
      return;
    }
    onBlogDelete(id);
    nav("/", { replace: true });
  };

  const markdown = `
## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done
`;

  return (
    <div className="view_container">
      <h2 className="title">{title}</h2>
      <div className="post_info">
        <span className="category">{category}</span>
        <span className="date">{new Date(date).toLocaleDateString()}</span>
      </div>
      {img ? (
        <figure className="img_box">
          <img src={img} alt="" />
        </figure>
      ) : null}
      <div className="content_area">
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        {/* <Markdown
          //   remarkPlugins={[remarkGfm]}
          components={{
            code({ className, children, inline, ...props }) {
              // 어떤 언어로 작성되었는지 파싱하는 코드 ``` 혹은 ~~~ 뒤에 지정한 언어를 알아냄.
              // props중 inline 코드인지 아닌지를 알려주는 플래그가 있음.
              console.log(props);
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={a11yDark}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children)
                    .replace(/\n$/, "")
                    .replace(/\n&nbsp;\n/g, "")
                    .replace(/\n&nbsp\n/g, "")}
                </SyntaxHighlighter>
              ) : (
                <code style={{ background: "red", color: "white" }}>
                  {children}
                </code>
              );
            },
            blockquote({ children, ...props }) {
              return (
                <blockquote
                  style={{
                    background: "#7afca19b",
                    padding: "1px 15px",
                  }}
                  {...props}
                >
                  {children}
                </blockquote>
              );
            },
          }}
        >
          {content.replace(/\n/gi, "\n\n")}
        </Markdown> */}
      </div>
      <div className="view_util">
        <Link to={-1} className="btn back_btn">
          목록으로
        </Link>
        <div>
          <Link to={`/edit/${id}`} className="btn bg_black">
            수정하기
          </Link>
          <button className="btn bg_red" onClick={onClickDelete}>
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
