import './App.scss';
import { useEffect } from "react";
import { useLocation, Route, Routes, useNavigate } from "react-router-dom";
import Layout from './components/Layout';
import HomePage from './components/content/HomePage';
import DetailPage from './components/content/DetailPage';
import ChapterPage from './components/content/ChapterPage';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import { history } from './components/js/History';

function App() {
  const pathLogin = '/login';
  const pathRegister = '/register'; 

  history.navigate = useNavigate();
  history.location = useLocation();

  useEffect(() => {
    document.title = 'Komiq'
  },[])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path="/comic/:comicId" exact element={<DetailPage />}/>
        <Route path="/comic/:comicId/:chapterNumber/:chapterId" exact element={<ChapterPage />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
      <Route path={pathLogin} exact element={<Login/>}/>
      <Route path={pathRegister} exact element={<Register/>}/>
    </Routes>
  );
}

export default App;
