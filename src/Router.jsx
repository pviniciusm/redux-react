import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import { HomePage } from './pages/Home';
import { CounterPage } from './pages/Counter';
import { ECommercePageProps } from './pages/ECommerceProps';
import { ECommercePage } from './pages/ECommerce';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/counter" element={<CounterPage />} />
                <Route
                    path="/commerce-props"
                    element={<ECommercePageProps />}
                />
                <Route path="/commerce" element={<ECommercePage />} />
                <Route path="/*" element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    );
};
