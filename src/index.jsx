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
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErroPage/>,
    children:[{
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/:id",
      element: <ProdutoPage/>
    },
    {
      path: "/Buque-flores",
      element: <BuquePage/>
    },
    {
      path: "/Arranjo-de-flores",
      element: <ArranjoPage/>
    },
    {
      path: "/Vazo-de-flores",
      element: <VazoPage/>
    },
    {
      path: "/Cesta-de-flores",
      element: <CestaPage/>
    },
    {
      path: "/Presentes",
      element: <PresentesPage/>
    }
    ]
  },
  {
    path: "/Cadastro",
    element: <CadastroPage/>
  },
  {
    path: "/Login",
    element: <LoginPage/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);

reportWebVitals();
