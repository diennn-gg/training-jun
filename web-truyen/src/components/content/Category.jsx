import { useState, useCallback, useEffect } from "react";
import CardCategory from "../card/CardCategory";
import CategoryMenu from "./CategoryMenu";
import Loading from "../Loading";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Category() {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listMenu, setListMenu] = useState([]);
  const showToastError = (error, toastId) => {
    toast.error(`[Fetch category has an error]: ${error.message}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      toastId
    })
  };

  const wrapperSetList = useCallback(val => {
    setCategory(val);
  }, [setCategory]);

  // Get Comics
  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const getComics = async () => {
      const toastId = 'fetched-comic';
      setLoading(true);
      try {
        const result = await axios.get(`${API_BASE_URL}/comic?page=1&limit=20`);
        setData(result.data.results);
      } catch (error) {
        showToastError(error, toastId)
      }
      setLoading(false);
    }
    getComics();
  },[])

  // Filter Comics
  useEffect(()  => {
    setListMenu(
      data.filter(item => {
        if (category.length === 0 || category === 'all') return true;
        return item.categories.find( (cate) => {
          return cate.url === category ? true : false;
        })
      })
    );
  },[category, data])
  
  return (
    <div className="category">
      <div className="container">
        <CategoryMenu listMenuCateSetter={wrapperSetList}/>
        <div className="toast-container"><ToastContainer limit={2}/></div>
        {loading ? <Loading/> : (
          <div className="category-story">
            <CardCategory comics={listMenu}/>
          </div>
        )}
        <div className="category-menu__notification">Bạn đã xem đến cuối trang</div>
      </div>
    </div>
  );
}

export default Category;
