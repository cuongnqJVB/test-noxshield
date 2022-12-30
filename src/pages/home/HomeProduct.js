/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { productService } from '../../servies';

const HomeProduct = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const onGetList = async () => {
            try {
                const response = await productService.get({
                    skip: 0,
                    limit: 1,
                    isVisible: true,
                });
                if (!response.code) {
                    const data = (response.data && response.data[0]) || {};
                    setProduct(data);
                }
            } catch (ex) {
                throw ex;
            }
        };
        onGetList();
    }, []);

    return product && product?.id ? (
        <div
            className="poster-container wow fadeIn animated"
            style={{
                visibility: 'visible',
                animationName: 'fadeIn'
            }}
        >
            <div className="poster_product">
                <div className="poster_product__left">
                    <img src={product?.thumbnail} alt={product?.title} />
                </div>
                <div className="poster_product__right">
                    <div className="right__content">
                        <h3 className="text-fs-40 lg:text-5xl 2xl:text-fs-63 font-extrabold text-white mb-4 md:mb-3">
                            {product?.title}
                        </h3>
                        <p className="text-fs-14 lg:text-lg 2xl:text-fs-24 font-medium text-white mb-7 md:mb-14 xl:mb-40">
                            {product?.description}
                        </p>
                        <div className="w-full flex items-center justify-center">
                            <Link href={product?.url}>
                                <button className="ant-btn btn-light-primary font-bold text-blue-1 text-lg 2xl:text-xl py-2 px-3 md:py-3 md:px-5">
                                    Tìm hiểu thêm
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};
export default HomeProduct;
