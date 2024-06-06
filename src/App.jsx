import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import List from "./pages/List";
import Edit from "./pages/Edit";
import Write from "./pages/Write";

const router = createBrowserRouter([
    { path: "/", element: <List /> },
    { path: "/edit", element: <Edit /> },
    { path: "/write", element: <Write /> },
]);
function App() {
    return (
        <div id="wrap">
            <header id="header">header</header>
            <main>
                <RouterProvider router={router} />
            </main>
            <header id="header">footer</header>
        </div>
    );
}

export default App;
