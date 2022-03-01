
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Mainpage from './pages/mainpage/Mainpage';
import {  BrowserRouter ,Routes, Link , Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/dashbord" element={<Dashboard />} />
   
      </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Signup /> */}
       {/* <Mainpage /> */}
       {/* <Header />
       < Footer /> */}
       {/* <Dashboard /> */}
    </div>
  );
}

export default App;
