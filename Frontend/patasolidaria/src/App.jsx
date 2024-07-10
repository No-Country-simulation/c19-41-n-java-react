
import Home from './components/pages/Home'
import Layout from './components/pages/Layout';
import Login from './components/pages/Login'
import Logout from './components/pages/Logout'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Servicos from './components/pages/Servicos';

function App() {

  return (
    <>
      <Router> 
        <Routes>
          <Route path="/" element={<Layout/>}>    
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/logout" element={<Servicos/>}/>

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
