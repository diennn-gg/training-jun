import {ReactComponent as SvgAward} from '../../images/icons/award-sm.svg'

function CardBanner ( {comic, rank}) {
    const topMonth = 1;
    const API_BASE_URL_IMAGE = process.env.REACT_APP_API_BASE_URL_IMAGE;

    return (
        <div className="card">
            <div className="card-top">
                {topMonth === rank ? <SvgAward/> : ''}
                Top {rank}
            </div>
            <div>
                <img className="card-image" src={`${API_BASE_URL_IMAGE}?url=${encodeURIComponent(comic.avatar)}`} alt={comic?.name ?? "Image comic"}/>
                <div className="card-info">
                    <p className="card-info__name">{comic?.name ?? "Image comic"}</p>
                    <span className="card-info__view">
                        {comic.view} lượt xem
                        <svg className="card-info__view-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
                            <path stroke="#797979" strokeLinecap="round" strokeLinejoin="round" d="M.667 8S3.333 2.667 8 2.667 15.333 8 15.333 8 12.667 13.333 8 13.333.667 8 .667 8Z" />
                            <path stroke="#797979" strokeLinecap="round" strokeLinejoin="round" d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                        </svg>
                    </span>
                    <p className="card-info__chapter">Chapter {comic.chapters.length}</p>
                </div>
            </div>
        </div>
    )
}

export default CardBanner;