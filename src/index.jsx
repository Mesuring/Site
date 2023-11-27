import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/home/home';
import ProdutoPage from './pages/produtoDetalhes/produto';
import CadastroPage from './pages/cadastro/cadastro';
import LoginPage from './pages/login/login';
import ErroPage from './pages/erro/erroPage';
import ArranjoPage from './pages/arranjo-de-flores/arranjo';
import BuquePage from './pages/buque-flor/buque';
import CestaPage from './pages/cesta-de-flores/cesta';
import PresentesPage from './pages/presentes/presentes';
import VazoPage from './pages/vazo-de-flores/vazo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path=":id" element={<ProdutoPage />} />
        <Route path="Buque-flores" element={<BuquePage />} />
        <Route path="Arranjo-de-flores" element={<ArranjoPage />} />
        <Route path="Vazo-de-flores" element={<VazoPage />} />
        <Route path="Cesta-de-flores" element={<CestaPage />} />
        <Route path="Presentes" element={<PresentesPage />} />
      </Route>
      <Route path="/Cadastro" element={<CadastroPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="*" element={<ErroPage />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();