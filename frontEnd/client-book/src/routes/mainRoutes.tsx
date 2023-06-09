import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { MainPage } from "../pages/mainPage";
import { RegisterPage } from "../pages/registerPage";

export function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/new" element={ <RegisterPage/> } />
            <Route path="/main" element={ <MainPage/> } />
        </Routes>
    )
}