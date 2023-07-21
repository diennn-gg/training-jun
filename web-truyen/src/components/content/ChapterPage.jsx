import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function ChapterPage() {
  const { comicId, chapterNumber, chapterId } = useParams();
  const [ chapter, setChapter] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_BASE_URL_IMAGE = process.env.REACT_APP_API_BASE_URL_IMAGE;
  const showToastError = (error, toastId) => {
    toast.error(`[Get Chapter has an error]: ${error.message}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      toastId
    })
  };

  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const toastId = 'fetched-chapter';
    const getChapter = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`${API_BASE_URL}/chapter/${chapterId}`);
        setChapter(result.data.images);
      } catch (error) {
        showToastError(error, toastId);
      }
      setLoading(false);
    };
    chapterId ? getChapter() : showToastError('Chapter id invalid', toastId);
  }, [chapterId]);
  
  useEffect(() => {
    // Save comic chapter to localStorage
    let comicLocal = {chapter: chapterNumber, chapterId: chapterId};
    let comicLocalString = JSON.stringify(comicLocal)
    localStorage.setItem(comicId, comicLocalString)
  },[])

  return (
    <>
      {loading ? <Loading/> : (
        <div className="chapter-container">
          {
            chapter.map( (item, index) => (
              <img key={index} className="chapter-image" src={`${API_BASE_URL_IMAGE}?url=${encodeURIComponent(item)}`} alt={`img-${index} chapter-${chapterId}`}/>
            ))
          }
        </div>
      )}
      <div className="toast-container"><ToastContainer limit={2}/></div>
    </>
  )
}

export default ChapterPage;