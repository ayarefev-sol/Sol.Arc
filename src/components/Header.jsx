import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav style={{ padding: "20px", background: "#eee" }}>
            <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
            <Link to="/register" style={{ marginRight: "15px" }}>Register</Link>
            <Link to="/dashboard">Dashboard</Link>
            </nav>
    );
}