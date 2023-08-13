import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div className="p-2 flex items-center justify-center">
            <div className="w-28 h-28 mr-auto">
                <img
                    className="w-28 h-28 rounded-full"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.googleapis.com%2Fspikeybits-staging-bucket%2F2018%2F06%2FMek-Feature.jpg&f=1&nofb=1&ipt=f3a765585d65e5c01044ea941e7b07f4876b8dd09b48db79e797e48fcfe717c8&ipo=images"></img>
            </div>
            <div className="p-1 mr-auto">
                <Link to={'/'} className="p-1 mr-1">Buggiez</Link>
                <Link to={'/'} className="p-1 mr-1">Gunz</Link>
            </div>
        </div>
    )
}