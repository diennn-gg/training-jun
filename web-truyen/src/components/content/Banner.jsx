import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import CardBanner from '../card/CardBanner';
import { ReactComponent as SvgArrowButton} from '../../images/arrow-button-slide.svg'
import { topMonth } from '../../data/data';

function Banner () {
    const btnPrev = useRef();
    const btnNext = useRef();

    return (
        <div className="banner">
            <div className="container">
                <div className="banner-head">
                    <div className="banner-head__title">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="38" height="38" rx="19" fill="#EAFA34"/>
                                <rect x="5" y="5" width="30" height="30" rx="15" fill="#EAFA34"/>
                                    <g clipPath="url(#clip0_108_284)">
                                        <path d="M20.0001 22.5C23.2217 22.5 25.8334 19.8883 25.8334 16.6667C25.8334 13.445 23.2217 10.8333 20.0001 10.8333C16.7784 10.8333 14.1667 13.445 14.1667 16.6667C14.1667 19.8883 16.7784 22.5 20.0001 22.5Z" stroke="#252427" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16.8416 21.575L15.8333 29.1667L19.9999 26.6667L24.1666 29.1667L23.1583 21.5667" stroke="#252427" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                <rect x="5" y="5" width="30" height="30" rx="15" stroke="#252427" strokeWidth="2"/>
                            <rect x="1" y="1" width="38" height="38" rx="19" stroke="#252427" strokeWidth="2"/>
                            <defs>
                                <clipPath id="clip0_108_284">
                                    <rect width="20" height="20" fill="white" transform="translate(10 10)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="banner-head__title-text">Bảng xếp hạng</span>
                    </div>
                    <div className="banner-head__link">
                        <a className="btn-primary active" href="/#">Top Tháng</a>
                        <a className="btn-primary" href="/#">Top Tuần</a>
                        <a className="btn-primary" href="/#">Top Ngày</a>
                    </div>
                </div>
                <div className="banner-list">
                    <Swiper
                        className="mySwiper"
                        slidesPerView={5}
                        slidesPerGroup={5}
                        spaceBetween={12}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            clickable: true,
                            prevEl: btnPrev.current,
                            nextEl: btnNext.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = btnPrev.current;
                            swiper.params.navigation.nextEl = btnNext.current;
                       }}
                        modules={[Pagination, Navigation]}
                    >
                        {
                            topMonth.map( (story, index) => (
                                <SwiperSlide key={index}><CardBanner story={story}/></SwiperSlide>
                            ))
                        }
                    </Swiper>

                    <div className="banner-list-btn-prev" ref={btnPrev}>
                        <SvgArrowButton/>
                    </div>
                    <div className="banner-list-btn-next" ref={btnNext}>
                        <SvgArrowButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;