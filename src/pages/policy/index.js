/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { pageConfigService } from '../../servies';

export default function PolicyPage(props) {
    const { data } = props;

    const renderStringToHtml = (content) => {
        return { __html: content || '' };
    };

    return (
        <div className="about-page sec-container">
            <h1 className="main_title">{data?.title}</h1>
            <div className="about__content">
                <h4><strong>{data?.title}</strong></h4>
                <div
                    className="w-full"
                    dangerouslySetInnerHTML={renderStringToHtml(
                        data?.content
                    )}
                />
            </div>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    if (!query?.slug) {
        return {
            notFound: true
        }
    }

    // Get data
    const response = await pageConfigService.get({
        skip: 0,
        limit: 1,
        slug: query?.slug
    });
    return {
        props: {
            slug: query.slug,
            data: response?.length ? response[0] : {}
        }
    };
}
