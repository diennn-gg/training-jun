import { useState, useCallback } from "react";
import CardCategory from "../card/CardCategory";
import CategoryMenu from "./CategoryMenu";
import { storys } from "../../data/data-category";

function Category() {
  const [listMenuCate, setListMenuCate] = useState(storys);

  const wrapperSetList = useCallback(val => {
    setListMenuCate(val);
  }, [setListMenuCate]);
  
  return (
    <div className="category">
      <div className="container">
        <CategoryMenu listMenuCateSetter={wrapperSetList}/>
        <div className="category-story">
          <CardCategory storys={listMenuCate}/>
        </div>
        <div className="category-menu__notification">Bạn đã xem đến cuối trang</div>
      </div>
    </div>
  );
}

export default Category;
