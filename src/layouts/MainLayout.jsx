import { Outlet } from "react-router-dom";
import Nav from "../componants/Nav";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;