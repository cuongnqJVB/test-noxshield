/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { categoryService } from '../../servies';

const HomeCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const onGetList = async () => {
            try {
                const response = await categoryService.get({
                    skip: 0,
                    limit: 21,
                    isVisible: true,
                });
                if (!response.code) {
                    setCategories(response.data || []);
                }
            } catch (ex) {
                throw ex;
            }
        };
        onGetList();
    }, []);

    return (
        <div className="category-container">
            <h2
                className="font-bold text-base xl:text-4xl text-center text-blue-1 mb-4 px-3 md:px-0 wow fadeIn animated"
                style={{
                    visibility: 'visible',
                    animationName: 'fadeIn'
                }}
            >
                {categories?.length ? 'NoxShield hiệu quả tốt với các trường hợp' : ''}
            </h2>
            <div className="list-category px-9 md:px-0" style={{ display: categories?.length ? '' : 'none' }}>
                {categories.map((c, index) => (
                    <Link
                        className="category__item wow fadeIn animated"
                        style={{
                            visibility: 'visible',
                            animationName: 'fadeIn'
                        }}
                        href={c?.url}
                        key={index}>
                        <div className="main__content">
                            <div className="bg-content">
                                <img src={c?.thumbnail} alt={c?.title} />
                            </div>
                            <span className="title-content px-2 xl:px-4 text-fs-10 lg:text-fs-18 xl:text-fs-22 2xl:text-fs-27">
                                {c?.title}
                            </span>
                        </div>
                        <div className="hover__content">
                            <div className="hover__item">
                                <div className="hover__line"></div>
                                <div className="hover__image">
                                    <img src={c?.thumbnail} alt={c?.title} />
                                    <div className="mask-img"></div>
                                </div>
                                <span className="hover__title text-white text-fs-10 lg:text-fs-18 xl:text-fs-22 2xl:text-fs-27">
                                    {c?.title}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default HomeCategory;
