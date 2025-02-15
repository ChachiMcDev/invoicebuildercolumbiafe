import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router";
import InvoiceDashboardPage from '../components/InvoiceDashboardPage';
import InvoiceView from '../components/InvoiceView';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

// import RegisterPage from '../components/RegisterUser';
// import ProtectedRoute from './ProtectedRoutes';


const AppRouter = () => (
    <BrowserRouter >
        <Header />
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<InvoiceDashboardPage />} />
            <Route path="/view/:id" element={<InvoiceView />} />
            <Route path="*" element={<NotFoundPage />} />

        </Routes>

    </BrowserRouter>
)

export default AppRouter