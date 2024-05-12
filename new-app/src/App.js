import logo from './logo.svg';
import './App.css';
 import Header from './Components/Header'
 import Footer from './Components/Footer'

 import LoginPage from './Components/Login';
 import SignUp from './Components/SignUp';
 import Sell from './Components/Sell';
 import Buy from './Components/Buy';
 import UserInfo from './Components/UserInfo';
 import Docs from './Components/Docs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
        <BrowserRouter>
        <Header/>
      <Routes>
        
      <Route path='/login' element={<><LoginPage/></>}/>
      <Route path='/reqsell' element={<><Sell/></>}/>
      
      <Route path='/signup' element={<><SignUp/></>}/>
     
      <Route path='/reqbuy' element={<><Buy/></>}/>
      <Route path='/user' element={<><UserInfo/></>}/>
     
      <Route path='/reqbuy' element={<><Buy/></>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
