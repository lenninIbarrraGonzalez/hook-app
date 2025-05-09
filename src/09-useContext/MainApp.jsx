import { Navigate, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { Navbar } from "./Navbar";



export const MainApp = () => (
    <UserProvider>
        {/* <h1>Main App</h1> */}
        <Navbar/>
        <hr />
        
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="about" element={<AboutPage/>}/>

            {/* <Route path="*" element={<LoginPage/>}/> */}
            <Route path="*" element={<Navigate to="/about"/>}/>
        </Routes>
        
    </UserProvider>
)
