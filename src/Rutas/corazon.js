import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Error from "./Error";
import Home from "../Home";
import Certificados from "./certificados";

const corazon = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/certificados" element={<Certificados />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default corazon;