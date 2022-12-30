/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MetaFacebook } from '../../components/metadata';
import { EmptyData } from '../../components/error-group';
import { postService, pageSeoService } from '../../servies';

export default function CategoryPage(props) {
    const { slug, metadata } = props;
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const onGetList = async () => {
            try {
                const response = await postService.get({
                    skip: 0,
                    limit: 50,
                    isVisible: true,
                    categorySlug: slug,
                });
                if (!response.code) {
                    setArticles(response.data || []);
                }
            } catch (ex) {
                throw ex;
            } finally {
                setLoading(false);
            }
        };
        onGetList();
    }, []);

    return (
        <div className="page-article">
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
            <div className="list_article sec-container" style={{ display: articles?.length ? '' : 'none' }}>
                {
                    articles.map((item, index) => (
                        <div
                            className="article__item wow fadeIn animated"
                            key={index}
                            style={{
                                visibility: 'visible',
                                animationName: 'fadeIn'
                            }}
                        >
                            <Link href={item?.slug} className="bg__article">
                                <img src={item?.thumbnail} alt={item?.title} />
                            </Link>
                            <div className="content__article">
                                <Link href={item?.slug}>
                                    <h2 className="title">
                                        {item?.title}
                                    </h2>
                                </Link>
                                {/* <span className="subtitle">
                                        {item.subtitle}
                                    </span> */}
                                <p className="content">
                                    {item?.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                !articles?.length && !isLoading
                    ? (
                        <EmptyData />
                    )
                    : null
            }
        </div>
    );
}

export async function getServerSideProps({ query }) {
    if (!query?.slug) {
        return {
            notFound: true
        }
    }

    // Get seo page
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
