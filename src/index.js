import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Home from "./home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NoMatch from "./NoMatch";
import Login from "./login/Login";

const router = createBrowserRouter([
    {
        path: "*",
        element: <NoMatch />,
    },
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
    },
]);

ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
