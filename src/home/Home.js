import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "..";
import Footer from "./Footer";
import Body from "./body/Body";
import Header from "./header/Header";

function Home(props) {
    return (
        <Box minHeight={"100vh"} display={"flex"} flexDirection={"column"}>
            <Provider store={store}>
                <Header />
            </Provider>
            <Body />
            <Footer />
        </Box>
    );
}

export default Home;
