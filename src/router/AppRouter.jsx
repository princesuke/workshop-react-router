import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Lifestyle from "../pages/LifeStyle";
import Jouney from "../pages/Journey";
import Inspiration from "../pages/Inspriration";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="lifestyle" element={<Lifestyle />} />
                    <Route path="journey" element={<Jouney />} />
                    <Route path="inspiration" element={<Inspiration />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                 {/* <Route path="*" element={<p>404 Not Found</p>} /> */}
            </Routes>
        </BrowserRouter>
    )
}