import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import './index.scss';
import App from './App';
import HomePage from './components/content/HomePage';
import DetailPage from './components/content/DetailPage';
import ChapterPage from './components/content/ChapterPage';
import NotFound from './components/NotFound';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}/>
          <Route path="/comic/:comicId" exact element={<DetailPage />}/>
          <Route path="/comic/:comicId/:chapterNumber/:chapterId" exact element={<ChapterPage />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
