/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { sliderService } from '../../servies';

const HomeSlider = () => {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        const onGetList = async () => {
            try {
                const response = await sliderService.get({
                    skip: 0,
                    limit: 20,
                    isVisible: true,
                });
                if (!response.code) {
                    setSliders(response.data || []);
                }
            } catch (ex) {
                throw ex;
            }
        };
        onGetList();
    }, []);

    const ButtonNext = ({ className, onClick }) => {
        return (
            <div className={className} onClick={onClick}>
                <img src="/icons/ic-slide-next.svg" alt="ic-next" />
            </div>
        );
    };

    const ButtonPrev = ({ className, onClick }) => {
        return (
            <div className={className} onClick={onClick}>
                <img src="/icons/ic-slide-prev.svg" alt="ic-prev" />
            </div>
        );
    };

    return (
        <>
            <div className="home-slider desktop">
                <Slider
                    dots={true}
                    speed={800}
                    fade={true}
                    infinite={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2000}
                    pauseOnHover={true}
                    nextArrow={<ButtonNext />}
                    prevArrow={<ButtonPrev />}
                    className={'home-slick'}
                >
                    {sliders.map((slider, index) => {
                        return (
                            <Link
                                href={slider?.content}
                                className="item__slider w-full h-full"
                                key={index}
                            >
                                <div
                                    style={{
                                        visibility: 'visible',
                                        animationName: 'fadeIn'
                                    }}
                                    className="inner__slider w-full h-full wow fadeIn animated">
                                    <img
                                        src={slider?.desktopUrl}
                                        title={slider?.title}
                                        alt={slider?.alt || 'noxshield'}
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </Slider>
            </div>
            <div className="home-slider mobile">
                {sliders.map((slider, index) => {
                    return (
                        <Link
                            href={slider?.content}
                            className="item__slider"
                            key={index}
                        >
                            <img
                                src={slider?.mobileUrl}
                                title={slider?.title}
                                alt={slider?.alt || 'noxshield'}
                            />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};
export default HomeSlider;
