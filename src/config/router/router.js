import {About,Home,Contact,Service,Dashboard,Profile,ErrorPage}  from ".";
import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";

export default function AppRouter() {
    return (
        <Router>
        <div>
            <Routes>
                <Route  path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/services" element={<Service />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/dashboard/*" element={<Dashboard />}/>
                <Route path="*" element={<ErrorPage />}/>
                <Route path="/profile/:id" element={<Profile />}/>
            </Routes>
        </div>
        </Router>
    )
}
