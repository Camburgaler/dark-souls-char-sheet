import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CharacterSheet from "./character-sheet/CharacterSheet";
import { BASE_PATH, CHARACTER_PATH, HOME_PATH, LOGIN_PATH } from "./constants";
import Home from "./home/Home";
import "./index.css";
import Login from "./login/Login";
import NoMatch from "./NoMatch";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter(
    [
        {
            path: "*",
            element: <NoMatch />,
        },
        {
            path: "/",
            element: <App />,
        },
        {
            path: LOGIN_PATH,
            element: <Login />,
        },
        {
            path: HOME_PATH,
            element: <Home />,
        },
        {
            path: CHARACTER_PATH + "/:uuid",
            element: <CharacterSheet />,
        },
    ],
    {
        basename: BASE_PATH,
    }
);

ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
