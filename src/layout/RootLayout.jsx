import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div>
            <NavBar />
            <div className="min-h-[calc(100vh-200px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout;