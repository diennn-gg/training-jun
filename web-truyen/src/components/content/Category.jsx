import { useState, useCallback, useEffect } from "react";
import CardCategory from "../card/CardCategory";
import CategoryMenu from "./CategoryMenu";
import Pagination from "../uses/Pagination";
import Loading from "../Loading";
import { axiosPublic } from "../js/AxiosPublic";
import { showToastError } from "../js/Toast";

function Category() {
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const [page, setPage] = useState(1);
  const [cateData, setCateData] = useState([]);
  const [loading, setLoading] = useState(false);

  const wrapperSetList = useCallback(val => {
    setCategory(val);
  }, [setCategory]);

  const wrapperSetPage = useCallback(val => {
    setPage(val + 1);
  }, [setPage]);

  // Get Comics
  useEffect(() => {
    const getComics = async () => {
      const toastId = 'fetched-comic';
      setLoading(true);
      try {
        const { data } = await axiosPublic.get(`/comic${category ? `/category/${category}`: `?page=${page}&limit=12`}`);
        setData(data);
        setCateData(data.results);
      } catch (error) {
        showToastError(`[Fetch category has an error]:${error.message}`, toastId)
      }
      setLoading(false);
    }
    getComics();
  },[category, page])
  
  return (
    <div className="category">
      <div className="container">
        <CategoryMenu listMenuCateSetter={wrapperSetList}/>
        {loading ? <Loading/> : (
          !cateData.length ? 
            <center className="category-notify text-sm-medium">No comics in this category</center>
            :
            <div className="category-story">
              <CardCategory comics={cateData}/>
            </div>
        )}
        {
          (!data?.totalPages || data?.totalPages === 1) ||
          <Pagination totalPages={data?.totalPages} currentPage={data?.page ?? 0} pageSetter={wrapperSetPage}/>
        }
      </div>
    </div>
  );
}

export default Category;
