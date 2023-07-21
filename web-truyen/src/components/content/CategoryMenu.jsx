import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const menuDropDown = ['🎭 Drama', '👨‍❤️‍👨Đam mỹ', '🧚🏻Cartoon', '🏛 Cổ đại', '🌃 Slice of life', '⚽️ Sport', '👩🏻‍🏫️ Học đường', '👨🏻‍🍳 Cooking', '🧙🏻‍♀️ Mystery', '🦸🏻 Siêu nhân', '🧬 Khoa học viễn tưởng'];

function CategoryMenu({listMenuCateSetter}) {
  const menuRef = useRef([]);
  const [active, setActive] = useState(0);
  const [categories, setCategories] = useState([]);
  const showToastError = (error, toastId) => {
    toast.error(`[Fetch categories has an error]: ${error.message}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      toastId
    })
  };

  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const getCategories = async () => {
      const toastId = 'fetched-categories';
      try {
        const result = await axios.get(`${API_BASE_URL}/category/categories?page=1&limit=12`);
        setCategories(result.data.results);
      } catch (error) {
        showToastError(error, toastId)
      }
    };
    getCategories();
  }, []);

  const handleClick = (index) => {
    const thisCate = menuRef.current[index].id;
    listMenuCateSetter(thisCate);
    setActive(index);
  };

  return (
    <div className="category-menu">
      {categories.map((item, index) => (
        <span
          key={index}
          id={index === 0 ? 'all' : item.url}
          ref={(el) => (menuRef.current[index] = el)}
          onClick={() => handleClick(index)}
          className={`category-menu__btn btn-category ${
            active === index ? "active" : ""
          }`}
        >
          {index === 0 ? 'Tất cả' : item.name}
        </span>
      ))}
      <span className="category-menu__btn btn-category category-dropdown">
        <span>
          Xem thêm
          <svg
            className="svg-down"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 7.5L10.5 12.5L15.5 7.5"
              stroke="#252427"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <ul className="category-dropdown__list">
          {menuDropDown.map((item, index) => (
            <li key={index} className="category-dropdown__list-item">
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </span>
      <div className="toast-container"><ToastContainer limit={2}/></div>
    </div>
  );
}

export default CategoryMenu;
