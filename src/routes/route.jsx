import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import FAQ from "../pages/FAQ";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/history" element={<History />} />
                <Route path="/app" element={<MobileApp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
