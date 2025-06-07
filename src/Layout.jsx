import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"

export default function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet />
            <Footer/>
        </>
    )
}