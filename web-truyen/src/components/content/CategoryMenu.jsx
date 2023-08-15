import { useRef, useState, useEffect } from "react";
import { showToastError } from "../js/Toast";
import { axiosPublic } from "../js/AxiosPublic";

const menuDropDown = ['🎭 Drama', '👨‍❤️‍👨Đam mỹ', '🧚🏻Cartoon', '🏛 Cổ đại', '🌃 Slice of life', '⚽️ Sport', '👩🏻‍🏫️ Học đường', '👨🏻‍🍳 Cooking', '🧙🏻‍♀️ Mystery', '🦸🏻 Siêu nhân', '🧬 Khoa học viễn tưởng'];

function CategoryMenu({listMenuCateSetter}) {
  const menuRef = useRef([]);
  const menuDropRef = useRef([]);
  const scrollRef = useRef();
  const [active, setActive] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const toastId = 'fetched-categories';
      try {
        const result = await axiosPublic.get(`/category/categories?page=1&limit=11`);
        setCategories(result.data.results);
      } catch (error) {
        showToastError(`[Fetch categories has an error]:${error.message}`, toastId)
      }
    };
    getCategories();
    scrollMenu();
  }, []);

  useEffect(() => {
    categories.unshift({name: 'Tất cả'});
  },[categories])

  const handleClick = (index) => {
    const thisCate = menuRef.current[index].id;
    listMenuCateSetter(thisCate);
    setActive(index);
  };

  const scrollMenu = () => {
    scrollRef.current.addEventListener('wheel', (e) => {
      e.preventDefault();
      scrollRef.current.scrollBy({
        left: e.deltaY < 0 ? -30 : 30,
      });
    });
  };

  return (
    <>
      <div className="category-menu">
        <div className="category-menu__scroll" ref={scrollRef}>
          {categories.map((item, index) => (
            <span
              key={index}
              id={item?._id ?? ''}
              ref={(el) => (menuRef.current[index] = el)}
              onClick={() => handleClick(index)}
              className={`category-menu__btn btn-category ${
                active === index ? "active" : ""
              }`}
            >
              {item.name}
            </span>
          ))}
          <span className="category-menu__btn btn-category category-dropdown">
            <span className="d-flex align-item-center">
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
            <ul className="category-dropdown__list" ref={menuDropRef}>
            {menuDropDown.map((item, index) => (
              <li key={index} className="category-dropdown__list-item">
                <span>{item}</span>
              </li>
            ))}
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}

export default CategoryMenu;
