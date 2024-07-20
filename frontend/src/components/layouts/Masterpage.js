import { Outlet } from "react-router-dom";
import Header from "../Header.js";
import Footer from "../Footer.js";
import Dashboard from "../Dashboard/Dashbaord.js";

const masterpage =() => {
    return (
        <>
            <Header>
                <Dashboard/>
            </Header>
            <Outlet />
            <Footer />
        </>
    );
}
export default masterpage;