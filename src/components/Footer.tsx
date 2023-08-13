import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="p-3 bottom-0 left-0 w-full flex flex-col items-center justify-center bg-lime-900">
            <Link to={'http://google.com'} className="p-1">Kontact Me</Link>
            <Link to={'http://google.com'} className="p-1">Turms & Kundishuns</Link>
            <Link to={'http://google.com'} className="p-1">Privacie Policie</Link>
        </div>)
}