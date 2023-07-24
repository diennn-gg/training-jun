import './App.scss';
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import ScrollButton from "./components/js/ScrollButton";
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="main">
        <Outlet/>
        <ScrollButton />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
