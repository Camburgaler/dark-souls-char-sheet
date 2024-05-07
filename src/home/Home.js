import { Box } from "@mui/material";
import Footer from "./Footer";
import Body from "./body/Body";
import Header from "./header/Header";

function Home(props) {
    return (
        <Box
            minHeight={"100vh"}
            display={"flex"}
            flexDirection={"column"}
            data-testid="home-box"
        >
            <Header />
            <Body />
            <Footer />
        </Box>
    );
}

export default Home;
