import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";




export default function Root() {


    return (
        <div className="bg-lime-800">
            <div>
                <Navbar />
            </div>
            <Outlet />
        </div>
    )

}