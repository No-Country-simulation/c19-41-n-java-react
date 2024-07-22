
import Home from './pages/Home'
import Layout from './pages/Layout';
import Login from './pages/Login'
import Logout from './pages/Logout'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Servicos from './pages/Servicos';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <Router> 
        <Routes>
          <Route path="/" element={<Layout/>}>    
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/servico" element={<Servicos/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
