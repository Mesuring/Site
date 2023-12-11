import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/home';
import ProdutoPage from '../pages/produtoDetalhes/produto';
import CadastroPage from '../pages/cadastro/cadastro';
import LoginPage from '../pages/login/login';
//import ErroPage from '../pages/erro/erroPage';
import ArranjoPage from '../pages/arranjo-de-flores/arranjo';
import BuquePage from '../pages/buque-flor/buque';
import CestaPage from '../pages/cesta-de-flores/cesta';
import PresentesPage from '../pages/presentes/presentes';
import VazoPage from '../pages/vazo-de-flores/vazo';
import App from '../App';

const isAuthenticated = localStorage.getItem('token') !== null;

// const PrivateRoute = ({ element }) => {
//     return isAuthenticated ? element : <Navigate to="/login" />;
// };

const RoutesApp = () => {
    const publicRoutes = (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            <Route path="*" element={<LoginPage/>} />
        </Routes>
    );

    const privateRoutes = (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path=":id" element={<ProdutoPage />} />
                <Route path="buque-flores" element={<BuquePage />} />
                <Route path="arranjo-de-flores" element={<ArranjoPage />} />
                <Route path="vazo-de-flores" element={<VazoPage />} />
                <Route path="cesta-de-flores" element={<CestaPage />} />
                <Route path="presentes" element={<PresentesPage />} />
            </Route>
        </Routes>
    );

    return (
        <BrowserRouter>
            {isAuthenticated ? privateRoutes : publicRoutes}
        </BrowserRouter>
    );
};


export default RoutesApp;