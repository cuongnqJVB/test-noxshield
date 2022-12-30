import Head from 'next/head';
import { useEffect, useState } from 'react';
import HomeSlider from './HomeSlider';
import HomePartner from './HomePartner';
import HomeProduct from './HomeProduct';
import HomeArticle from './HomeArticle';
import HomeCategory from './HomeCategory';
import { pageSeoService } from '../../servies';
import { MetaFacebook } from '../../components/metadata';

const HomePage = (props) => {
    const { metadata } = props;

    return (
        <div className="w-full flex flex-col">
            <Head>
                <title>{metadata?.metaTitle}</title>
                <meta name="keywords" content={metadata?.metaKeyword} />
                <meta name="description" content={metadata?.metaDescription} />
                <MetaFacebook
                    url={metadata?.metaUrl}
                    title={metadata?.metaTitle}
                    image={metadata?.metaImage}
                    description={metadata?.metaDescription}
                />
            </Head>
            <HomeSlider />
            <div className="w-full flex flex-col sec-container">
                <HomeCategory />
                <HomeArticle />
                <HomePartner />
                <HomeProduct />
            </div>
        </div>
    );
};


export async function getServerSideProps({ query }) {
    if (!query?.slug) {
        return { notFound: true }
    }
    const seoConfig = await pageSeoService
        .get({
            skip: 0,
            limit: 1,
            slug: query?.slug,
        });
    return {
        props: {
            slug: query?.slug,
            metadata: seoConfig?.length ? seoConfig[0] : {}
        },
    };
}


export default HomePage;
