/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { partnerService } from '../../servies';

const HomePartner = () => {
    const [partner, setPartner] = useState({});

    useEffect(() => {
        const onGetList = async () => {
            try {
                const response = await partnerService.get({
                    skip: 0,
                    limit: 1,
                    isVisible: true,
                });
                if (!response.code) {
                    const data = (response.data && response.data[0]) || {};
                    setPartner(data);
                }
            } catch (ex) {
                throw ex;
            }
        };
        onGetList();
    }, []);

    return partner && partner?.id ? (
        <div
            className="poster-container wow fadeIn animated"
            style={{
                visibility: 'visible',
                animationName: 'fadeIn'
            }}
        >
            <div className="poster-top">
                <div className="block__left">
                    <div className="left__content">
                        <h3 className="text-fs-40 lg:text-5xl 2xl:text-fs-63 font-extrabold text-white mb-4 md:mb-3 px-6 md:px-0">
                            {partner?.title}
                        </h3>
                        <p className="text-fs-14 lg:text-lg 2xl:text-fs-24 font-medium text-white mb-7 md:mb-10 px-8 md:px-0">
                            {partner?.description}
                        </p>
                        <Link href={partner?.url}>
                            <button className="ant-btn btn-light-primary font-bold text-blue-1 text-lg 2xl:text-xl py-2 px-3 md:py-3 md:px-5">
                                Tìm hiểu thêm
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="block__right px-1.5 md:px-4">
                    <div className="w-20 md:w-36 lg:w-44 mx-auto mb-6">
                        <img
                            className="w-full h-full object-contain"
                            src={partner?.favoriteImage}
                            alt="noxshield"
                        />
                    </div>
                    <span className="font-semibold text-fs-10 md:text-lg xl:text-fs-24 text-blue-1 pl-5 md:pl-0">
                        Là đối tác với:
                    </span>
                    <div className="w-full h-auto flex items-center justify-center">
                        <img
                            className="w-full h-full object-cover"
                            src={partner?.partnerImage}
                            alt="noxshield"
                        />
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};
export default HomePartner;
