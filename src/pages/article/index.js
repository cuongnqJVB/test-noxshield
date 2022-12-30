/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { postService } from '../../servies';
import { NotFound } from '../../components/error-group';
import { MetaFacebook } from '../../components/metadata';

export default function ArticlePage(props) {
    const { data } = props;

    const renderStringToHtml = (content) => {
        return { __html: content || '' };
    };

    return (
        data && data?.id
            ? (
                <div className="page-article-detail">
                    <Head>
                        <title>{data?.metaTitle}</title>
                        <meta name="keywords" content={data?.metaKeyword} />
                        <meta name="description" content={data?.metaDescription} />
                        <MetaFacebook
                            url={data?.metaUrl}
                            title={data?.metaTitle}
                            image={data?.metaImage}
                            description={data?.metaDescription}
                        />
                    </Head>
                    <div
                        className="detail__content sec-container wow fadeIn animated"
                        style={{
                            visibility: 'visible',
                            animationName: 'fadeIn'
                        }}
                    >
                        <h1 className="article__title text-fs-26 lg:text-fs-50 2xl:text-fs-60 font-bold text-blue-1 mb-5 md:mb-1">
                            {data?.title}
                        </h1>
                        <div className="content">
                            <div className="w-full h-full rounded-3xl md:rounded-none">
                                <img
                                    className="w-full h-full object-cover rounded-3xl md:rounded-none"
                                    src={data?.thumbnail}
                                    alt="noxshield"
                                />
                            </div>
                            <span className="w-full text-fs-12 md:text-3xl font-medium italic text-sliver-2 text-center mt-4 md:mt-14">
                                {data?.description}
                            </span>
                            <div
                                className="text-fs-12 lg:text-xl 2xl:text-3xl text-dark my-4"
                                dangerouslySetInnerHTML={renderStringToHtml(
                                    data?.content
                                )}
                            />
                        </div>
                    </div>
                </div>
            ) : <NotFound />
    );
}

export async function getServerSideProps({ query }) {
    if (!query?.slug) {
        return {
            notFound: true
        }
    }

    // Get detail article
    const response = await postService.get({
        skip: 0,
        limit: 1,
        isVisible: true,
        slug: query?.slug,
    });
    return {
        props: {
            slug: query.slug,
            data: response?.length ? response[0] : {}
        }
    };
}
