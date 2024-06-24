import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header id="header">
            <h1 className="logo">
                <Link to="/">ee.log</Link>
            </h1>
            <nav className="gnb">
                <ul>
                    <li>
                        <Link>Login</Link>
                    </li>
                    <li>
                        <Link>SignUp</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
