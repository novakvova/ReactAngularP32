import {Routes, Route} from 'react-router-dom';
import './App.css';
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import NoMatchPage from "./pages/NoMatch/NoMatchPage";

function App() {
    return (
        <>
            <Routes>
                {/*Загальні сторінки для користувача*/}
                <Route path={"/"} element={<Layout/>}>
                    {/*index - почтковий маршнут, який іде зверху*/}
                    <Route index element={<HomePage/>}/>
                    <Route path={"about"} element={<AboutPage/>}/>
                    <Route path={"dashboard"} element={<DashboardPage/>}/>
                    <Route path="*" element={<NoMatchPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
