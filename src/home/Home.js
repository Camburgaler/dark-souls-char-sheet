import { Box } from "@mui/material";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./header/Header";

function Home(props) {
    return (
        <Box minHeight={"100vh"} display={"flex"} flexDirection={"column"}>
            <Header />
            <Body />
            <Footer />
        </Box>
    );
}

export default Home;
