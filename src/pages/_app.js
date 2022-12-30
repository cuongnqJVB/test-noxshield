/* eslint-disable @next/next/no-img-element */
import App from 'next/app';
import { useEffect, useState } from 'react';
import '../../styles/index.scss';

// Service
import { Storage, appConfigService, footerService } from '../servies';

// Components
import Header from '../containers/header';
import Footer from '../containers/footer';

const MyApp = ({ Component, pageProps, appConfig }) => {
    const { pageConfig, footerConfig } = appConfig;
    const [pageInfo, setPageInfo] = useState({});

    useEffect(() => {
        if (pageConfig && pageConfig?.id) {
            Storage.add({
                key: Storage.PAGE_CONFIG,
                value: JSON.stringify(pageConfig),
            });
        }
        if (footerConfig && footerConfig?.id) {
            Storage.add({
                key: Storage.PAGE_FOOTER,
                value: JSON.stringify(footerConfig),
            });
        }
        // set page info
        const indexOf = Storage.get(Storage.PAGE_CONFIG);
        const config = indexOf ? JSON.parse(indexOf) : {};
        if (config && config?.id) {
            setPageInfo(config);
        } else {
            setPageInfo(pageConfig);
        }
    }, [pageConfig, footerConfig]);

    return (
        <div className="page-container">
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
            {/* Header */}
            <Header pageConfig={pageConfig} />
            {/* Header */}

            <div className="page-content">
                <Component {...pageProps} />
            </div>
            <Footer footerConfig={footerConfig} />
            {/* Floaticon */}
            <div
                className="floaticon-fixed wow fadeIn animated"
                style={{
                    visibility: 'visible',
                    animationName: 'fadeIn'
                }}
            >
                <div className="floaticon__content">
                    <a
                        href={pageInfo?.facebook || '/'}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/icons/ic-facebook-2.svg" alt="ic-facebook" />
                    </a>
                    <a
                        href={pageInfo?.zalo || '/'}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/icons/ic-zalo.svg" alt="ic-zalo" />
                    </a>
                    <a
                        id="icon-call"
                        className="icon-call"
                        href={`tel:${pageInfo?.phone}`}
                        rel="noreferrer"
                    >
                        <img src="/icons/ic-call.svg" alt="ic-call" />
                        <label htmlFor="icon-call" className="phone-label">
                            <span className="font-semibold text-white text-fs-19">
                                {pageInfo?.phone}
                            </span>
                        </label>
                    </a>
                </div>
            </div>
            {/* Floaticon */}
        </div>
    );
};

MyApp.getInitialProps = async (appContext) => {
    const { ctx } = appContext;
    if (ctx && ctx.res && ctx.res?.statusCode === 404) {
        appContext.ctx.res.writeHead(302, { Location: '/not-found' });
        appContext.ctx.res.end();
    }

    // Get app config
    const pageConfig = await appConfigService
        .get({
            skip: 0,
            limit: 1,
        });
    const footerConfig = await footerService
        .get({
            skip: 0,
            limit: 1,
        });
    const config = {
        pageConfig: pageConfig?.length ? pageConfig[0] : {},
        footerConfig: footerConfig?.length ? footerConfig[0] : {},
    };
    const initialProps =
        App.getInitialProps && (await App.getInitialProps(appContext));
    return { ...initialProps.pageProps, appConfig: { ...config } };
};

export default MyApp;
