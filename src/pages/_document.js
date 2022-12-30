import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { appConfigService } from '../servies/app-config.service';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(
            ctx
        );
        const appConfig = await appConfigService.get({
            limit: 1
        });
        return {
            ...initialProps,
            appConfig: appConfig[0] || {}
        };
    }

    render() {
        const { appConfig } = this.props;
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href={appConfig.favicon} />
                    <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
                    <link rel="dns-prefetch" href="https://noxshield.com.vn" />
                    <link rel="preconnect" href="https://noxshield.com.vn" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
