import "./Pagination.css";

const Pagination = () => {
    return (
        <div className="pagination_area">
            <ul className="pagination">
                <li className="prev">
                    <button>&lt;</button>
                </li>
                <li>
                    <button className="on">1</button>
                </li>
                <li>
                    <button>2</button>
                </li>
                <li>
                    <button>3</button>
                </li>
                <li>
                    <button>4</button>
                </li>
                <li>
                    <button>5</button>
                </li>
                <li>
                    <button>6</button>
                </li>
                <li>
                    <button>7</button>
                </li>
                <li>
                    <button>8</button>
                </li>
                <li>
                    <button>9</button>
                </li>
                <li>
                    <button>10</button>
                </li>
                <li className="next">
                    <button>&gt;</button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
