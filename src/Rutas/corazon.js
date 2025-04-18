import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Error from "./Error";
import Home from "../Home";
import Certificados from "./certificados";
import Proyectos from "./proyectos";

const corazon = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/certificados" element={<Certificados />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default corazon;