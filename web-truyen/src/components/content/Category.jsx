import { useRef, useState } from 'react'
import CardCategory from "../card/CardCategory";
import { storys } from '../../data/data-category';

const menuCategory = ['Tất cả', '❤ Tình yêu', '🦄 Fantasy', '😆 Hài hước', '🥷🏻 Action', '😱 Thriller', '🔞 Người lớn', '🧟‍♀️ Kinh dị', '🕵🏻‍♂️ Trinh thám', '🇻🇳 Truyện Việt'];
const menuDropDown = ['🎭 Drama', '👨‍❤️‍👨Đam mỹ', '🧚🏻Cartoon', '🏛 Cổ đại', '🌃 Slice of life', '⚽️ Sport', '👩🏻‍🏫️ Học đường', '👨🏻‍🍳 Cooking', '🧙🏻‍♀️ Mystery', '🦸🏻 Siêu nhân', '🧬 Khoa học viễn tưởng'];

function Category () {
    const menuRef = useRef([]);
    const [active, setActive] = useState(0);
    const [listMenuCate, setListMenuCate] = useState(storys);

    const handleClick = (index) => {
        const thisText =  menuRef.current[index].textContent;

        // setActive for button category
        setActive(index);
        // Filter list
        setListMenuCate(storys.filter( item => {
            if(thisText === menuCategory[0]) return true
            return item.category === thisText
        }))
    }

    return (
        <div className="category">
            <div className="container">
                <div className="category-menu">
                    {
                        menuCategory.map((item, index) => (
                            <span 
                                key={index}
                                ref={el => menuRef.current[index] = el}
                                onClick={() => handleClick(index)}
                                className={ `category-menu__btn btn-primary ${active === index ? 'active' : ''}` }
                            >
                                {item}
                            </span>
                        ))
                    }
                    <div className="category-menu__btn btn-primary category-dropdown">
                        <span>
                            Xem thêm
                            <svg className="svg-down" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 7.5L10.5 12.5L15.5 7.5" stroke="#252427" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <ul className="category-dropdown__list">
                            {
                                menuDropDown.map((item, index) => (
                                    <li key={index} className="category-dropdown__list-item">
                                        <span>{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="category-story">
                    <CardCategory storys={listMenuCate}/>
                </div>
            </div>
        </div>
    )
}

export default Category;