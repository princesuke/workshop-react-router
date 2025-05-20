import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/Layout";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<p>Home</p>} />
                    <Route path="lifestyle" element={<p>Lifestyle</p>} />
                    <Route path="journey" element={<p>Jouney</p>} />
                    <Route path="inspiration" element={<p>Inspiration</p>} />
                    <Route path="about" element={<p>About</p>} />
                    <Route path="contact" element={<p>Contact</p>} />
                    <Route path="*" element={<p>404 Not Found</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}