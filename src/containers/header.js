/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import ZaloModal from '../components/modal/ZaloModal';
import BannerModal from '../components/modal/BannerModal';
import { Storage } from '../servies';

const Header = ({ pageConfig }) => {
    const [headerClass, setHeaderClass] = useState('');
    const [toggleMenu, setToggle] = useState(false);
    const [modalVisible, setVisible] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [headerConfig, setHeaderConfig] = useState({});

    useEffect(() => {
        const onGetConfig = () => {
            const indexOf = Storage.get(Storage.PAGE_CONFIG);
            const config = indexOf ? JSON.parse(indexOf) : {};
            if (config && config?.id) {
                setHeaderConfig(config);
            } else {
                setHeaderConfig(pageConfig);
            }
        }
        onGetConfig();
    }, [pageConfig]);

    useEffect(() => {
        const showHideSubMenu = () => {
            const dropdownLinks = document.querySelectorAll(
                '.menu_content .wrap__item'
            );
            dropdownLinks.forEach((item) => {
                item.addEventListener('click', () => {
                    setToggle(false);
                });
            });
        };

        const handleMenuScroll = () => {
            if (window.pageYOffset > 80) {
                setHeaderClass('header-fixed');
            } else {
                setHeaderClass('');
            }
        };

        const detectModalViewed = () => {
            const indexOf = Storage.get(Storage.POPUP_VIEWED);
            const popup = indexOf ? JSON.parse(indexOf) : {};
            if (!popup?.viewed_at) {
                setTimeout(() => setPopupVisible(true), 550);
                const operation = {};
                operation['viewed_at'] = Date.now();
                Storage.add({
                    key: Storage.POPUP_VIEWED,
                    value: JSON.stringify(operation),
                });
            }
        };

        // Request
        showHideSubMenu();
        detectModalViewed();
        window.addEventListener('scroll', handleMenuScroll);

        return () => {
            window.removeEventListener('scroll', handleMenuScroll);
        };
    }, []);

    const scrollToTop = () => {
        if (window) {
            window.scrollTo({
                top: 0,
                left: 0,
            });
        }
    };

    const menuConfig = [
        {
            title: 'C?? s??? khoa h???c c???a NoxShield',
            href: '/co-so-khoa-hoc-cua-noxshield',
            sub_menus: [],
        },
        {
            title: 'C??c nh??m b???nh nh??n',
            href: '/cac-nhom-benh-nhan',
            sub_menus: [
                {
                    title: 'B???nh nh??n c?? h??? mi???n d???ch y???u',
                    href: '/benh-nhan-co-he-mien-dich-yeu',
                },
                {
                    title: 'B???nh nh??n vi??m xoang',
                    href: '/benh-nhan-viem-xoang',
                },
                {
                    title: 'Tr??? em b??? nhi???m si??u vi',
                    href: '/tre-em-bi-nhiem-sieu-vi',
                },
                {
                    title: 'B???nh nh??n vi??m m??i d??? ???ng',
                    href: '/benh-nhan-viem-mui-di-ung',
                },
                {
                    title: 'Ph??? n??? c?? thai b??? nhi???m si??u vi',
                    href: '/phu-nu-co-thai-bi-nhiem-sieu-vi',
                },
                {
                    title: 'B???nh nh??n c??m m??a',
                    href: '/benh-nhan-cum-mua',
                },
            ],
        },
        {
            title: 'Nhi???m si??u vi & ????? kh??ng kh??ng sinh',
            href: '/nhiem-sieu-vi-va-de-khang-khang-sinh',
            sub_menus: [],
        },
        {
            title: 'C??u h???i th?????ng g???p',
            href: '/cau-hoi-thuong-gap',
            sub_menus: [],
        },
    ];

    return (
        <>
            <header className={headerClass}>
                <div className="page_header sec-container">
                    <div className="page_header__menu">
                        <div
                            onClick={() => setToggle(!toggleMenu)}
                            className={`toggle-menu ${toggleMenu ? 'open' : ''
                                }`}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div
                            className={`dropdown-menu beautify-scroll ${toggleMenu ? 'open' : ''
                                }`}
                        >
                            <div
                                className="close-menu text-sm md:text-xl"
                                onClick={() => setToggle(!toggleMenu)}
                            >
                                <span>????ng X</span>
                            </div>
                            <div className="menu_content">
                                {menuConfig.map((menu, parentIndex) => (
                                    <div
                                        className="wrap__item"
                                        key={parentIndex}
                                    >
                                        <Link
                                            href={menu.href}
                                            onClick={() =>
                                                setToggle(!toggleMenu)
                                            }
                                            className={`menu__item text-sm sm:text-lg xl:text-fs-26 2xl:text-fs-32 font-bold`}
                                        >
                                            <span>{menu.title}</span>
                                        </Link>
                                        {menu.sub_menus && menu.sub_menus.length
                                            ? menu.sub_menus.map(
                                                (c2, childIndex) => (
                                                    <Link
                                                        className={`child__item text-xs sm:text-base xl:text-fs-22 2xl:text-fs-26 font-semibold`}
                                                        onClick={() =>
                                                            setToggle(
                                                                !toggleMenu
                                                            )
                                                        }
                                                        href={c2.href}
                                                        key={childIndex}
                                                    >
                                                        <span>
                                                            {c2.title}
                                                        </span>
                                                    </Link>
                                                )
                                            )
                                            : null}
                                    </div>
                                ))}
                            </div>
                            <div className="mark-menu"></div>
                        </div>
                    </div>
                    <Link
                        href={'/'}
                        className="page_header__logo wow fadeIn animated"
                        style={{
                            visibility: 'visible',
                            animationName: 'fadeIn'
                        }}
                    >
                        <img
                            className="w-full h-full object-contain"
                            onClick={() => scrollToTop()}
                            src={headerConfig?.logo}
                            alt="noxshield"
                        />
                    </Link>
                    <div className="page_header__contact">
                        <button
                            onClick={() => setVisible(true)}
                            className="ant-btn btn-danger font-bold text-fs-13 md:text-fs-20 xl:text-fs-24 2xl:text-fs-28 rounded-full"
                        >
                            Li??n h???
                        </button>
                    </div>
                </div>
            </header>
            <div className="mask-layout-mobile"></div>
            {
                <ZaloModal
                    visible={modalVisible}
                    onClose={() => setVisible(false)}
                    redirectLink={headerConfig?.linkContact}
                    desktopUrl={headerConfig?.imageContactDesktop}
                    mobileUrl={headerConfig?.imageContactMobile}
                />
            }
            {
                <BannerModal
                    visible={popupVisible && headerConfig?.imagePromotionDesktop}
                    onClose={() => setPopupVisible(false)}
                    redirectLink={headerConfig?.linkPromotion}
                    desktopUrl={headerConfig?.imagePromotionDesktop}
                    mobileUrl={headerConfig?.imagePromotionMobile}
                />
            }
        </>
    );
};
export default Header;
