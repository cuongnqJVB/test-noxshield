/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Storage, categoryService } from '../servies';

const Footer = ({ footerConfig }) => {
    const router = useRouter();
    const [footer, setFooter] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const onGetFooter = async () => {
            const indexOf = Storage.get(Storage.PAGE_FOOTER);
            const config = indexOf ? JSON.parse(indexOf) : {};
            if (config && config?.id) {
                setFooter(config);
            } else {
                setFooter(footerConfig);
            }
        };
        onGetFooter();
    }, [footerConfig]);

    useEffect(() => {
        const onGetCategory = async () => {
            try {
                await categoryService.get({
                    skip: 0,
                    limit: 4,
                    isVisible: true,
                }).then((response) => {
                    if (!response.code) {
                        setCategories(response.data || []);
                    }
                });
            } catch (ex) {
                throw ex;
            }
        };
        if (router.pathname.includes('article') || router.pathname.includes('category')) {
            onGetCategory();
        }
    }, [router.pathname]);

    const renderStringToHtml = (content) => {
        return { __html: content };
    };

    return footer && footer?.id ? (
        !router.pathname.includes('article') &&
            !router.pathname.includes('category') ? (
            <div
                className="w-full wow fadeIn animated"
                dangerouslySetInnerHTML={renderStringToHtml(footer?.content)}
                style={{
                    visibility: 'visible',
                    animationName: 'fadeIn'
                }}
            />
        ) : (
            <div className="article_footer">
                <div className="w-full flex justify-center my-2.5">
                    <div className="toggle-expand"></div>
                </div>
                {
                    categories?.length
                        ? (
                            <div
                                className="category-block sec-container wow fadeIn animated"
                                style={{
                                    visibility: 'visible',
                                    animationName: 'fadeIn'
                                }}
                            >
                                <Link
                                    href={'/'}
                                    className="next__title text-fs-16 md:text-lg 2xl:text-fs-26 text-gray-1 font-semibold"
                                >
                                    Đọc thêm
                                </Link>
                                <div className="list-category">
                                    {categories.map((c) => (
                                        <Link
                                            className="category__item"
                                            href={c?.url}
                                            key={c?.id}
                                        >
                                            <div className="main__content">
                                                <div className="bg-content">
                                                    <img src={c?.thumbnail} alt={c?.title} />
                                                </div>
                                                <span className="title-content px-2 xl:px-4 text-fs-12 lg:text-fs-18 xl:text-fs-22 2xl:text-fs-26">
                                                    {c?.title}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : null
                }
                <div
                    className="w-full wow fadeIn animated"
                    dangerouslySetInnerHTML={renderStringToHtml(
                        footer?.content
                    )}
                    style={{
                        visibility: 'visible',
                        animationName: 'fadeIn'
                    }}
                />
            </div>
        )
    ) : null;
    // <footer className="footer-container">
    //     <div className="footer-content sec-container">
    //         <div className="top_block">
    //             <div className="top__logo">
    //                 <img
    //                     className="d-none md:block w-full h-full object-contain"
    //                     src="/images/logo-footer.svg"
    //                     alt="noxshield"
    //                 />
    //                 <img
    //                     className="display-md-none w-full h-full object-contain"
    //                     src="/images/logo-footer-white.svg"
    //                     alt="noxshield"
    //                 />
    //             </div>
    //             <span className="w-full text-lg md:text-xl lg:text-fs-28 font-semibold text-white">
    //                 noxshield@alpha-france.com
    //             </span>
    //         </div>
    //         <div className="middle_block mt-8 mb-7">
    //             <div className="item__text flex items-start text-white">
    //                 <span className="d-none md:flex items-center text-fs-13 md:text-fs-21 font-semibold whitespace-nowrap">
    //                     <img src="/icons/ic-map.svg" alt="noxshield" />
    //                     Địa chỉ:
    //                 </span>
    //                 <span className="display-md-none items-center whitespace-nowrap mr-1.5">
    //                     <img src="/icons/ic-map.svg" alt="noxshield" />
    //                 </span>
    //                 <span className="d-none md:block text-fs-13 md:text-fs-21 font-semibold ml-3">
    //                     Văn phòng Tp.HCM: 18B/18 Nguyễn Thị Minh Khai,
    //                     phường Đa Kao, Quận 1, Tp.HCM
    //                     <br />
    //                     Văn phòng Hà Nội: LK 03-02, khu đô thị An Hưng, Quận
    //                     Hà Đông, Tp. Hà Nội
    //                 </span>
    //                 <div className="display-md-none flex-col items-start">
    //                     <div className="flex items-start mb-2">
    //                         <span className="text-fs-13 md:text-fs-21 font-semibold whitespace-nowrap mr-1">
    //                             Văn phòng Tp.HCM:
    //                         </span>
    //                         <span>
    //                             18B/18 Nguyễn Thị Minh Khai, phường Đa Kao,
    //                             Quận 1, Tp.HCM
    //                         </span>
    //                     </div>
    //                     <div className="flex items-start">
    //                         <span className="text-fs-13 md:text-fs-21 font-semibold whitespace-nowrap mr-1">
    //                             Văn phòng Hà Nội:
    //                         </span>
    //                         <span>
    //                             LK 03-02, khu đô thị An Hưng, Quận Hà Đông,
    //                             Tp. Hà Nội
    //                         </span>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="item__text flex items-center text-white">
    //                 <img
    //                     className="mr-2.5"
    //                     src="/icons/ic-call-light.svg"
    //                     alt="noxshield"
    //                 />
    //                 <span className="d-none md:block text-fs-13 md:text-fs-21 font-semibold">
    //                     Số điện thoại tổng đài: 1900 99 88 09
    //                 </span>
    //                 <span className="block-md-none text-fs-13 md:text-fs-21 font-semibold">
    //                     1900 99 88 09
    //                 </span>
    //             </div>
    //             <div className="item__text flex items-center text-white">
    //                 <img
    //                     className="mr-2.5"
    //                     src="/icons/ic-email-light.svg"
    //                     alt="noxshield"
    //                 />
    //                 <span className="d-none md:block text-fs-13 md:text-fs-21 font-semibold">
    //                     Email: noxshield@alpha-france.com
    //                 </span>
    //                 <span className="block-md-none text-fs-13 md:text-fs-21 font-semibold">
    //                     noxshield@alpha-france.com
    //                 </span>
    //             </div>
    //             <div className="item__text flex items-center text-white">
    //                 <img
    //                     className="mr-2.5"
    //                     src="/icons/ic-global-light.svg"
    //                     alt="noxshield"
    //                 />
    //                 <span className="d-none md:block text-fs-13 md:text-fs-21 font-semibold">
    //                     Website: www.noxshield.com.vn
    //                 </span>
    //                 <span className="block-md-none text-fs-13 md:text-fs-21 font-semibold">
    //                     www.noxshield.com.vn
    //                 </span>
    //             </div>
    //         </div>
    //         <div className="end_block">
    //             <div className="flex-1 text-white">
    //                 <div className="flex flex-col items-start">
    //                     <Link
    //                         href={'/chinh-sach-bao-mat'}
    //                         className="text-xs md:text-lg font-extrabold mb-4"
    //                     >
    //                         Chính sách bảo mật
    //                     </Link>
    //                     <Link
    //                         href={'/chinh-sach-nguoi-dung'}
    //                         className="text-xs md:text-lg font-extrabold mb-4"
    //                     >
    //                         Chính sách người dùng
    //                     </Link>
    //                     <Link
    //                         href={'/chinh-sach-tra-hang'}
    //                         className="text-xs md:text-lg font-extrabold"
    //                     >
    //                         Chính sách trả hàng
    //                     </Link>
    //                 </div>
    //             </div>
    //             <div className="flex-1 flex items-start justify-between">
    //                 <div className="flex flex-col items-start text-white">
    //                     <Link
    //                         href={'/chinh-sach-mua-hang'}
    //                         className=" text-xs md:text-lg font-extrabold whitespace-nowrap mb-4"
    //                     >
    //                         Chính sách mua hàng
    //                     </Link>
    //                     <Link
    //                         href={'/chinh-sach-bao-hanh'}
    //                         className="text-xs md:text-lg font-extrabold whitespace-nowrap mb-4"
    //                     >
    //                         Chính sách bảo hành
    //                     </Link>
    //                     <Link
    //                         href={'/dieu-khoan'}
    //                         className="text-xs md:text-lg font-extrabold whitespace-nowrap"
    //                     >
    //                         Điều khoản
    //                     </Link>
    //                 </div>
    //                 <div className="d-none md:flex flex-col items-start pl-2">
    //                     <a
    //                         href="http://online.gov.vn/Home/WebDetails/94729"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                     >
    //                         <img
    //                             className="w-28 mb-2.5"
    //                             src="/images/bo-cong-thuong.svg"
    //                             alt="noxshield"
    //                         />
    //                     </a>
    //                     <img
    //                         className="w-full h-full object-contain"
    //                         src="/images/dmca.svg"
    //                         alt="noxshield"
    //                     />
    //                 </div>
    //                 <div className="display-md-none absolute item__certificate">
    //                     <a
    //                         href="http://online.gov.vn/Home/WebDetails/94729"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                     >
    //                         <img
    //                             className="w-20"
    //                             src="/images/bo-cong-thuong.svg"
    //                             alt="noxshield"
    //                         />
    //                     </a>
    //                     <img
    //                         className="w-full h-full object-contain"
    //                         src="/images/dmca.svg"
    //                         alt="noxshield"
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <span className="d-none md:block sec-container text-fs-10 md:text-fs-16.5 text-white font-normal italic px-7 mt-2 mb-7">
    //         © 2022 Công ty TNHH Alpha France Pharma. Số ĐKKD 0316924248 cấp
    //         ngày 30/06/2021 tại Sở Kế hoạch. Đầu tư TPHCM Quản trị nội dung:
    //         Dược sĩ Phạm Anh Tuấn.
    //     </span>
    //     <div className="text_copyright display-md-none">
    //         <span className="text-fs-10 md:text-fs-16 text-black font-normal italic px-7 pt-2 md:pt-0 md:px-0">
    //             © 2022 Công ty TNHH Alpha France Pharma. Số ĐKKD 0316924248
    //             cấp ngày 30/06/2021 tại Sở Kế hoạch. Đầu tư TPHCM Quản trị
    //             nội dung: Dược sĩ Phạm Anh Tuấn.
    //         </span>
    //     </div>
    // </footer>
};
export default Footer;
