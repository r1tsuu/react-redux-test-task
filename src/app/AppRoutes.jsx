import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from '../pages/Catalog/CatalogPage';
import HomePage from '../pages/Home/HomePage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog/:catalog" element={<CatalogPage />} />
    </Routes>
  );
};
