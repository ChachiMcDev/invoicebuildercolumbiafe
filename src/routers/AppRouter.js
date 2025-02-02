import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router";
import InvoiceDashboardPage from '../components/InvoiceDashboardPage';
import InvoiceView from '../components/InvoiceView';
import Header from '../components/Header';
import PdfViewTest from '../components/PdfViewTest';
// import AddExpensePage from '../components/AddExpensePage';
// import EditExpensePage from '../components/EditExpensePage';
// import ExpenseHelpPage from '../components/ExpenseHelpPage';
import NotFoundPage from '../components/NotFoundPage';
// import LoginPage from '../components/LoginPage';
// import RegisterPage from '../components/RegisterUser';
// import ProtectedRoute from './ProtectedRoutes';


const AppRouter = () => (
    <BrowserRouter >
        <Header />
        <Routes>

            <Route path="/" element={<InvoiceDashboardPage />} />
            <Route path="/view/:id" element={<InvoiceView />} />
            <Route path="/pdftest" element={<PdfViewTest />} />


            <Route path="*" element={<NotFoundPage />} />

        </Routes>

    </BrowserRouter>
)

export default AppRouter