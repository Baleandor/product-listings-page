import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";




export default function Root() {



    return (
        <div className="bg-lime-800">
            <div className="sticky top-0 bg-lime-900">
                <Navbar />
            </div>
            <div className="mr-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    )

}