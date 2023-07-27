import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryMenu from "./CategoryMenu";
import DetailComic from "./DetailComic";
import Loading from "../Loading";
import { axiosPublic } from "../js/AxiosPublic";
import { showToastError } from "../js/Toast";

function Detail() {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const toastId = 'fetched-comic';
    const fetchComic = async () => {
      setLoading(true);
      try {
        const result = await axiosPublic.get(`/comic/url?url=${comicId}`);
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
