import "./Footer.css";

function Footer(props) {
    const package_json = require("../../package.json");
    return (
        <footer>
            Developed by a small team of retarded chimps. Please be patient, we
            have autism. v{package_json.version}
        </footer>
    );
}

export default Footer;
