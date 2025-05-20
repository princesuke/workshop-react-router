import { Outlet } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
        </div>
    )
}