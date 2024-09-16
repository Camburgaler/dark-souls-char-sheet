import { configureStore } from "@reduxjs/toolkit";
import { createRoot } from "react-dom/client";
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

const store = configureStore({
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
            element: <Home />,
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

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

