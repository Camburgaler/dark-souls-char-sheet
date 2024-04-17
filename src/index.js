import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NoMatch from "./NoMatch";
import CharacterCreation from "./character-creation/CharacterCreation";
import CharacterSheet from "./character-sheet/CharacterSheet";
import {
    BASE_PATH,
    CHARACTER_PATH,
    CREATE_PATH,
    FRIEND_PATH,
    HOME_PATH,
    LOGIN_PATH,
} from "./constants";
import Home from "./home/Home";
import "./index.css";
import Login from "./login/Login";
import rootReducer from "./redux/reducers";
import reportWebVitals from "./reportWebVitals";

export const store = configureStore({
    reducer: rootReducer,
});

const router = createBrowserRouter(
    [
        {
            path: "*",
            element: <NoMatch />,
        },
        {
            path: "/",
            element: <Login />,
        },
        {
            path: LOGIN_PATH,
            element: <Login />,
        },
        {
            path: HOME_PATH,
            element: (
                <Provider store={store}>
                    <Home />
                </Provider>
            ),
        },
        {
            path: CHARACTER_PATH + "/:uuid",
            element: <CharacterSheet />,
        },
        {
            path: FRIEND_PATH + "/:uuid",
            element: <Home />,
        },
        {
            path: CREATE_PATH,
            element: <CharacterCreation />,
        },
    ],
    {
        basename: BASE_PATH,
    }
);

function Index(props) {
    return <RouterProvider router={router} />;
}

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
