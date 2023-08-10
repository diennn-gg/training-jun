import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Loading from "../Loading";
import { history } from '../../components/js/History';
import Pagination from "../uses/Pagination";
import { showToastError } from "../js/Toast";
import { axiosPublic } from "../js/AxiosPublic";

function ChapterPage() {
  const { comicId, chapterNumber, chapterId } = useParams();
  const [ chapterIdd, setChapterIdd ] = useState(chapterId)
  const [ chapter, setChapter] = useState([]);
  const [ currentPage, setCurrentPage] = useState(0);
  const [ comicChapter, setComicChapter] = useState([]);
  const [  loading, setLoading ] = useState(false);
  const API_BASE_URL_IMAGE = process.env.REACT_APP_API_BASE_URL_IMAGE;

  const wrapperSetChapter = useCallback(val => {
    setChapterIdd(comicChapter[val]._id)
  }, [setChapterIdd, comicChapter]);

  useEffect(() => {
    const toastId = 'fetched-chapter';
    const getChapter = async () => {
      setLoading(true);
      try {
        const result = await axiosPublic.get(`chapter/${chapterIdd}`);
        const comic = await axiosPublic.get(`/comic/url?url=${comicId}`);
        setChapter(result.data.images);
        setComicChapter(comic.data.chapters);
        setCurrentPage(JSON.parse(result.data.chapter));
        history.navigate(`/comic/${comic.data.url}/chapter-${result.data.chapter}/${result.data.id}`)
      } catch (error) {
        showToastError(`[Get Chapter has an error]:${error.message}`, toastId);
      }
      setLoading(false);
    };
    chapterIdd ? getChapter() : showToastError('Chapter id invalid', toastId);
  }, [chapterIdd, comicId]);
  
  useEffect(() => {
    // Save comic chapter to localStorage
    let comicLocal = {chapter: chapterNumber, chapterId: chapterIdd};
    let comicLocalString = JSON.stringify(comicLocal)
    localStorage.setItem(comicId, comicLocalString)
  },[chapterIdd, chapterNumber, comicId, chapter])

  return (
    <>
      {loading ? <Loading/> : (
        <div className="chapter-container">
          <div className="chapter-content">
            {
              chapter.map( (item, index) => (
                <img
                  key={index}
                  className="chapter-image"
                  src={`${API_BASE_URL_IMAGE}?url=${encodeURIComponent(item)}`}
                  alt={`img-${index} chapter-${chapterId}`}
                />
              ))
            }
          </div>
          <div className="chapter-end">
            <Pagination totalPages={comicChapter?.length / 2} currentPage={currentPage} pageSetter={wrapperSetChapter}/>
          </div>
        </div>
      )}
    </>
  )
}

export default ChapterPage;
