import './App.css';
import HeaderComponent from './components/header/header';
import NavComponent from './components/nav/nav';
import { Outlet } from 'react-router-dom';
import FooterComponet from './components/footer/footer'

function App() {
    return (
        <div className='App'>
            <HeaderComponent/>
            <NavComponent/>
            <Outlet/>
            <FooterComponet/>
        </div>
    )
}

export default App;
