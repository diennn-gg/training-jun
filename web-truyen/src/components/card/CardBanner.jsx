import imgCard1 from "../../images/img-card-1.png"
 
function CardBanner () {
    return (
        <div className="card">
            <div className="card-top">Top 1</div>
            <div>
                <img src={imgCard1} alt="top 1"/>
                <div className="card-info">
                    <h3 className="card-info__name">Võ Luyện Đỉnh Phong</h3>
                    <span className="card-info__view">
                        32 M lượt xem
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
                            <path stroke="#797979" strokeLinecap="round" strokeLinejoin="round" d="M.667 8S3.333 2.667 8 2.667 15.333 8 15.333 8 12.667 13.333 8 13.333.667 8 .667 8Z" />
                            <path stroke="#797979" strokeLinecap="round" strokeLinejoin="round" d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                        </svg>
                    </span>
                    <p className="card-info__chapter">Chapter 2515</p>
                </div>
            </div>
        </div>
    )
}

export default CardBanner;