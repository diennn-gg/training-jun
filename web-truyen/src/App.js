import './App.scss';
import Header from './components/Header.js'
import Banner from './components/Banner.js'
import Category from './components/Category.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Category></Category>
      <Footer></Footer>
    </div>
  );
}

export default App;
