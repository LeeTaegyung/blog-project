import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CategoryListStateContext } from "../../App";
import "./Form.css";

const Form = ({ editData, onSubmit }) => {
    const categoryList = useContext(CategoryListStateContext);
    const nav = useNavigate();
    const [blogItem, setBlogItem] = useState({
        title: "",
        content: "",
        date: new Date().getTime(),
        category: "",
        img: undefined,
    });

    // 등록 클릭시
    const onClickSubmit = () => {
        onSubmit(blogItem);
        nav("/", { replace: true });
    };

    // input state 이벤트
    const onChangeInput = (e) => {
        setBlogItem({
            ...blogItem,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        // categoryList에서 가장 첫항목으로 초기화
        setBlogItem({
            ...blogItem,
            category: categoryList[0].name,
        });

        // 수정모드일때(editData 가 있다면)
        if (editData) {
            setBlogItem({
                ...editData,
            });
        }
    }, []);

    return (
        <div className="form_box">
            <div className="input_row">
                <span className="label">카테고리</span>
                <div className="input_box">
                    <select
                        name="category"
                        id=""
                        onChange={onChangeInput}
                        value={blogItem.category}
                    >
                        {categoryList.map((category) => (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="input_row">
                <span className="label">제목</span>
                <div className="input_box">
                    <input
                        type="text"
                        name="title"
                        id=""
                        placeholder="제목을 입력하세요"
                        value={blogItem.title}
                        onChange={onChangeInput}
                    />
                </div>
            </div>
            <div className="input_row">
                <span className="label">내용</span>
                <div className="input_box">
                    <textarea
                        name="content"
                        id=""
                        placeholder="내용을 입력하세요"
                        value={blogItem.content}
                        onChange={onChangeInput}
                    />
                </div>
            </div>
            <div className="input_row">
                <span className="label">사진</span>
                <div className="input_box">
                    <input type="file" name="" id="" />
                </div>
            </div>
            <div className="form_btn_row">
                {editData ? (
                    <button className="btn bg_black" onClick={onClickSubmit}>
                        수정
                    </button>
                ) : (
                    <button className="btn bg_green" onClick={onClickSubmit}>
                        등록
                    </button>
                )}
                <button
                    onClick={() => {
                        nav(-1, { replace: true });
                    }}
                    className="btn cancel_btn"
                >
                    취소
                </button>
            </div>
        </div>
    );
};

export default Form;
