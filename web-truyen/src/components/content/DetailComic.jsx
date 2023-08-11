import { Link } from "react-router-dom";
import BannerDetail from "../../images/banner-detail.png";
import avatar from "../../images/avatar.jpg";
import { ReactComponent as IconEye } from "../../images/icons/icon-eye.svg";

function DetailComic({ comic }) {
  const comicLocal = localStorage.getItem(comic.url);
  const comicParse = JSON.parse(comicLocal);
  const readBegin = `/comic/${comic.url}/chapter-${comic.chapters[0].chapter}/${comic.chapters[0]._id}`;
  //Check if comic exists in localStorage
  const readContinue = !comicParse ? readBegin : `/comic/${comic.url}/${comicParse.chapter}/${comicParse.chapterId}`;

  return (
    <div className="detail-container">
      <div className="detail-banner">
        <img src={BannerDetail} alt="Banner Detail" />
      </div>
      <div className="detail-content">
        <div className="detail-content__chapter">
          <div className="detail-content__chapter-btn">
            <Link className="btn-link btn-link--black text-bold-sm" to={readContinue}>
              Đọc tiếp
            </Link>
            <Link className="btn-link btn-link--yellow text-bold-sm" to={readBegin}>
              Đọc từ đầu
            </Link>
          </div>
          <div className="detail-content__chapter-list">
            <div className="text-bold-md">
              Danh sách chương ({comic.chapters.length})
            </div>
            <div>
              <ul>
                {comic.chapters.map((chapter, index) => (
                  <li
                    key={index}
                    className="d-flex justify-content-between flex-direction-row"
                  >
                    <Link className="text-xs-bold p-10" to={`chapter-${chapter.chapter}/${chapter._id}`}>
                      Chapter {chapter.chapter}
                    </Link>
                    <div className="text-regular d-flex justify-content-center">
                      <span className="p-10">6 phút trước</span>
                      <div className="space-icon-text p-10">
                        <IconEye />
                        <span>{chapter.view}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="detail-content__main detail-main">
          <div className="detail-main__heading text-lg-bold">{comic.name || ""}</div>
          <div className="detail-main__info d-flex flex-direction-row">
            <div className="detail-main__info-share d-flex align-item-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  fill="none"
                  viewBox="0 0 25 24"
                >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21.019 4.568a5.292 5.292 0 00-1.72-1.182 5.176 5.176 0 00-4.058 0 5.292 5.292 0 00-1.72 1.182L12.5 5.618l-1.021-1.05a5.23 5.23 0 00-3.749-1.596A5.23 5.23 0 003.98 4.568 5.526 5.526 0 002.427 8.42c0 1.445.559 2.83 1.553 3.852l1.022 1.05 7.497 7.706 7.498-7.706 1.022-1.05a5.459 5.459 0 001.15-1.767 5.58 5.58 0 000-4.17 5.459 5.459 0 00-1.15-1.768v0z"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  fill="none"
                  viewBox="0 0 25 24"
                >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.5 8a3 3 0 100-6 3 3 0 000 6zM6.5 15a3 3 0 100-6 3 3 0 000 6zM18.5 22a3 3 0 100-6 3 3 0 000 6zM9.09 13.51l6.83 3.98M15.91 6.51l-6.82 3.98"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="detail-main__info-cat d-flex align-item-center">
              {comic.categories.map((cate, index) => (
                <span key={index} className="category-menu__btn btn-category">
                  {cate.name || ""}
                </span>
              ))}
              <div></div>
            </div>
            <div className="detail-main__info-status d-flex text-regular">
              <div className="space-icon-text">
                <IconEye />
                <span>{comic.view}</span>
              </div>
              <div className="space-icon-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  fill="none"
                  viewBox="0 0 17 16"
                >
                  <path
                    stroke="#797979"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.18 3.045a3.529 3.529 0 00-1.147-.788 3.451 3.451 0 00-2.705 0c-.43.183-.819.45-1.147.788l-.681.7-.681-.7a3.487 3.487 0 00-2.5-1.064c-.937 0-1.836.383-2.499 1.064a3.684 3.684 0 00-1.035 2.569c0 .963.373 1.887 1.035 2.568l.681.7L8.5 14.02l4.999-5.137.68-.7a3.64 3.64 0 00.767-1.178 3.72 3.72 0 000-2.78 3.64 3.64 0 00-.766-1.179v0z"
                  ></path>
                </svg>
                <span>{comic.rate}</span>
              </div>
            </div>
          </div>
          <div className="detail-main__desc">
            <div className="detail-main__desc-introduce">
              <div className="text-bold-md">Giới thiệu</div>
              <p className="text-sm-medium">{comic.description}</p>
            </div>
            <div className="detail-main__desc-comment">
              <div className="text-bold-md">Bình luận (14,648)</div>
              <div className="input-primary">
                <button
                  className="input-primary__button btn-send"
                  type="submit"
                ></button>
                <input
                  className="input-primary__box"
                  placeholder="Nội dung bình luận"
                  type="search"
                />
              </div>
              <ul className="comment-list d-flex flex-direction-col">
                <li className="comment-list__item">
                  <div className="comment-list__item-avatar">
                    <img src={avatar} alt="avatar user comment" />
                  </div>
                  <div className="comment-list__item-message">
                    <div className="text-xs-bold">
                      <span className="message-name">Loc dep trai</span>
                      <span className="message-chapter">Chapter 3</span>
                    </div>
                    <div className="message-text text-regular">
                      mặt ông đi tàu hỏa ai cũng nghĩ thế thôi :))
                    </div>
                    <div className="message-reaction">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <g
                            stroke="#797979"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            clipPath="url(#clip0_163_2552)"
                          >
                            <path d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"></path>
                            <path d="M5.333 9.333s1 1.334 2.667 1.334c1.667 0 2.667-1.334 2.667-1.334M6 6h.007M10 6h.007"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_163_2552">
                              <path fill="#fff" d="M0 0H16V16H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            stroke="#797979"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10a1.333 1.333 0 01-1.333 1.333h-8L2 14V3.333A1.333 1.333 0 013.333 2h9.334A1.333 1.333 0 0114 3.333V10z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="comment-list__item">
                  <div className="comment-list__item-avatar">
                    <img src={avatar} alt="avatar user comment" />
                  </div>
                  <div className="comment-list__item-message">
                    <div className="text-xs-bold">
                      <span className="message-name">Loc dep trai</span>
                      <span className="message-chapter">Chapter 3</span>
                    </div>
                    <div className="message-text text-regular">
                      mặt ông đi tàu hỏa ai cũng nghĩ thế thôi :))
                    </div>
                    <div className="message-reaction">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <g
                            stroke="#797979"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            clipPath="url(#clip0_163_2552)"
                          >
                            <path d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"></path>
                            <path d="M5.333 9.333s1 1.334 2.667 1.334c1.667 0 2.667-1.334 2.667-1.334M6 6h.007M10 6h.007"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_163_2552">
                              <path fill="#fff" d="M0 0H16V16H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            stroke="#797979"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10a1.333 1.333 0 01-1.333 1.333h-8L2 14V3.333A1.333 1.333 0 013.333 2h9.334A1.333 1.333 0 0114 3.333V10z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="comment-list__item">
                  <div className="comment-list__item-avatar">
                    <img src={avatar} alt="avatar user comment" />
                  </div>
                  <div className="comment-list__item-message">
                    <div className="text-xs-bold">
                      <span className="message-name">Loc dep trai</span>
                      <span className="message-chapter">Chapter 3</span>
                    </div>
                    <div className="message-text text-regular">
                      mặt ông đi tàu hỏa ai cũng nghĩ thế thôi :))
                    </div>
                    <div className="message-reaction">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <g
                            stroke="#797979"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            clipPath="url(#clip0_163_2552)"
                          >
                            <path d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"></path>
                            <path d="M5.333 9.333s1 1.334 2.667 1.334c1.667 0 2.667-1.334 2.667-1.334M6 6h.007M10 6h.007"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_163_2552">
                              <path fill="#fff" d="M0 0H16V16H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            stroke="#797979"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10a1.333 1.333 0 01-1.333 1.333h-8L2 14V3.333A1.333 1.333 0 013.333 2h9.334A1.333 1.333 0 0114 3.333V10z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="comment-list__item">
                  <div className="comment-list__item-avatar">
                    <img src={avatar} alt="avatar user comment" />
                  </div>
                  <div className="comment-list__item-message">
                    <div className="text-xs-bold">
                      <span className="message-name">Loc dep trai</span>
                      <span className="message-chapter">Chapter 3</span>
                    </div>
                    <div className="message-text text-regular">
                      mặt ông đi tàu hỏa ai cũng nghĩ thế thôi :))
                    </div>
                    <div className="message-reaction">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <g
                            stroke="#797979"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            clipPath="url(#clip0_163_2552)"
                          >
                            <path d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"></path>
                            <path d="M5.333 9.333s1 1.334 2.667 1.334c1.667 0 2.667-1.334 2.667-1.334M6 6h.007M10 6h.007"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_163_2552">
                              <path fill="#fff" d="M0 0H16V16H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            stroke="#797979"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10a1.333 1.333 0 01-1.333 1.333h-8L2 14V3.333A1.333 1.333 0 013.333 2h9.334A1.333 1.333 0 0114 3.333V10z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="comment-list__item">
                  <div className="comment-list__item-avatar">
                    <img src={avatar} alt="avatar user comment" />
                  </div>
                  <div className="comment-list__item-message">
                    <div className="text-xs-bold">
                      <span className="message-name">Loc dep trai</span>
                      <span className="message-chapter">Chapter 3</span>
                    </div>
                    <div className="message-text text-regular">
                      mặt ông đi tàu hỏa ai cũng nghĩ thế thôi :))
                    </div>
                    <div className="message-reaction">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <g
                            stroke="#797979"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            clipPath="url(#clip0_163_2552)"
                          >
                            <path d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"></path>
                            <path d="M5.333 9.333s1 1.334 2.667 1.334c1.667 0 2.667-1.334 2.667-1.334M6 6h.007M10 6h.007"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_163_2552">
                              <path fill="#fff" d="M0 0H16V16H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            stroke="#797979"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10a1.333 1.333 0 01-1.333 1.333h-8L2 14V3.333A1.333 1.333 0 013.333 2h9.334A1.333 1.333 0 0114 3.333V10z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="comment-list__item">
                  <div className="comment-list__item-avatar">
                    <img src={avatar} alt="avatar user comment" />
                  </div>
                  <div className="comment-list__item-message">
                    <div className="text-xs-bold">
                      <span className="message-name">Loc dep trai</span>
                      <span className="message-chapter">Chapter 3</span>
                    </div>
                    <div className="message-text text-regular">
                      mặt ông đi tàu hỏa ai cũng nghĩ thế thôi :))
                    </div>
                    <div className="message-reaction">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <g
                            stroke="#797979"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            clipPath="url(#clip0_163_2552)"
                          >
                            <path d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"></path>
                            <path d="M5.333 9.333s1 1.334 2.667 1.334c1.667 0 2.667-1.334 2.667-1.334M6 6h.007M10 6h.007"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_163_2552">
                              <path fill="#fff" d="M0 0H16V16H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            stroke="#797979"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10a1.333 1.333 0 01-1.333 1.333h-8L2 14V3.333A1.333 1.333 0 013.333 2h9.334A1.333 1.333 0 0114 3.333V10z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailComic;
