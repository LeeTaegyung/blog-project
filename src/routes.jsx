import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ListPage from "./pages/ListPage/ListPage";
import EditPage from "./pages/EditPage/EditPage";
import WritePage from "./pages/WritePage/WritePage";
import ViewPage from "./pages/ViewPage/ViewPage";

const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <ListPage /> },
            { path: "edit/:id", element: <EditPage /> },
            { path: "write", element: <WritePage /> },
            { path: "view/:id", element: <ViewPage /> },
        ],
    },
];

export default routes;
