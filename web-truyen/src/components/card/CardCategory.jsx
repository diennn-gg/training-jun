import { useRef, Fragment } from "react";
import { Link } from "react-router-dom";

function CardCategory({ comics }) {
  const reactRef = useRef([]);
  const API_BASE_URL_IMAGE = process.env.REACT_APP_API_BASE_URL_IMAGE;

  const handleReact = (index) => {
    const thisRef = reactRef.current[index].classList;
    !thisRef.contains("active")
      ? thisRef.add("active")
      : thisRef.remove("active");
  };

  return (
    <Fragment>
      <div className="category-card">
        {comics.map((comic, index) => (
          <div key={index} className="category-card__item card">
            <div>
              <Link to={`/comic/${comic.url}`}>
                <img
                  src={`${API_BASE_URL_IMAGE}?url=${encodeURIComponent(comic.avatar)}`}
                  alt={comic?.name ?? "Image comic"}
                />
              </Link>
              <div className="card-info">
                <div className="card-info__name">
                  <Link className="card-info__name-link" to={`/comic/${comic.url}`}>
                    {comic?.name ?? "Name Comic"}
                  </Link>
                </div>
                <div className="card-info__chapter">
                  {comic.chapters.map((chapter, index) => (
                    <div key={index}>
                      <Link className="card-info__chapter-number" to={`/comic/${comic.url}/chapter-${chapter.chapter}/${chapter._id}`}>
                        <span>
                          Chapter {chapter.chapter}
                        </span>
                      </Link>
                      <p className="card-info__chapter-update">2 phút trước</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-status">
                <div
                  ref={(el) => (reactRef.current[index] = el)}
                  onClick={() => handleReact(index)}
                  className="card-status__reaction"
                >
                  <svg
                    className="card-status__reaction-svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    display="block"
                  >
                    <path
                      d="M20.5192 4.56772C20.0269 4.06161 19.4425 3.66013 18.7993 3.38622C18.156 3.1123 17.4665 2.97131 16.7703 2.97131C16.074 2.97131 15.3845 3.1123 14.7412 3.38622C14.098 3.66013 13.5136 4.06161 13.0213 4.56772L11.9998 5.61758L10.9782 4.56772C9.98393 3.5459 8.6354 2.97184 7.22928 2.97184C5.82315 2.97184 4.47463 3.5459 3.48035 4.56772C2.48607 5.58954 1.92749 6.97543 1.92749 8.4205C1.92749 9.86558 2.48607 11.2515 3.48035 12.2733L4.50191 13.3231L11.9998 21.0287L19.4976 13.3231L20.5192 12.2733C21.0116 11.7674 21.4023 11.1668 21.6688 10.5057C21.9354 9.84464 22.0726 9.13608 22.0726 8.4205C22.0726 7.70493 21.9354 6.99636 21.6688 6.33529C21.4023 5.67422 21.0116 5.07359 20.5192 4.56772V4.56772Z"
                      stroke="#252427"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="card-status__view">
                  {comic.view} lượt xem
                  <svg
                    className="card-status__view-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="none"
                  >
                    <path
                      stroke="#797979"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M.667 8S3.333 2.667 8 2.667 15.333 8 15.333 8 12.667 13.333 8 13.333.667 8 .667 8Z"
                    />
                    <path
                      stroke="#797979"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default CardCategory;
