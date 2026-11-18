import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-1 flex flex-col">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout;