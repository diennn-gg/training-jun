import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryMenu from "./CategoryMenu";
import DetailComic from "./DetailComic";
import Loading from "../Loading";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function Detail() {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(false);
  const showToastError = (error, toastId) => {
    toast.error(error, {
      position: toast.POSITION.BOTTOM_RIGHT,
      toastId
    })
  };

  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const toastId = 'fetched-comic';
    const fetchComic = async () => {
      setLoading(true);
      try {
        const result = await axios.get(
          `${API_BASE_URL}/comic/url?url=${comicId}`
        );
        setComic(result.data);
      } catch (error) {
        showToastError(error.message, toastId);
      }
      setLoading(false);
    };
    comicId ? fetchComic() : showToastError('Comic id invalid', toastId);
  }, [comicId]);

  return (
    <div className="detail">
      <div className="container">
        <CategoryMenu listMenuCateSetter={() => {}} />
        { loading ? <Loading/> : (
            comic && <DetailComic comic={comic} />
        )}
        <div className="toast-container"><ToastContainer limit={2}/></div>
        { loading && 
          <div className="category-menu__notification">
            Bạn đã xem đến cuối trang
          </div> 
        }
      </div>
    </div>
  );
}

export default Detail;
