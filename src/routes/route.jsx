import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import History from "../pages/History";
import MobileApp from "../pages/MobileApp";

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/history" element={<History />} />
                <Route path="/app" element={<MobileApp />} />
            </Routes>
        </HashRouter>
    );
}

export default AppRouter;
