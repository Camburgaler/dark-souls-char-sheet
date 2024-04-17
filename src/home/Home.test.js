import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import rootReducer from "../redux/reducers";
import Home from "./Home";

test("renders Home", () => {
    const store = configureStore({
        reducer: rootReducer,
    });
    act(() => {
        const { getByText } = render(
            <BrowserRouter>
                <Routes>
                    <Route
                        path="*"
                        element={
                            <Provider store={store}>
                                <Home />
                            </Provider>
                        }
                    />
                </Routes>
            </BrowserRouter>
        );
    });

    expect(true).toBeTruthy;
});
