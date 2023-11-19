import './App.css';
import HeaderComponent from './components/header/header';
import NavComponent from './components/nav/nav';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <HeaderComponent/>
            <NavComponent/>
            <Outlet/>
            <h1>Footer</h1>
        </div>
    )
}

export default App;
