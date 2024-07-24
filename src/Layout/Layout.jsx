import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";

function Layout (){

    return(
        <>
         <Navbar />
         <Outlet />
         <Footer />
        </>
    )

}

export default Layout;