/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { articleService } from '../../servies';

const HomeArticle = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const onGetList = async () => {
            try {
                const response = await articleService.get({
                    skip: 0,
                    limit: 10,
                    isVisible: true,
                });
                if (!response.code) {
                    setArticles(response.data || []);
                }
            } catch (ex) {
                throw ex;
            }
        };
        onGetList();
    }, []);

    const renderStringToHtml = (content) => {
        return { __html: content };
    };

    return (
        <div className="article-container" style={{ display: articles?.length ? '' : 'none' }}>
            {articles.map((item, index) => (
                <div
                    className={`article__item wow fadeIn animated ${item?.thumbPosition === 'left' ? 'reverse' : ''}`}
                    style={{
                        visibility: 'visible',
                        animationName: 'fadeIn'
                    }}
                    key={index}
                >
                    <div className="block__left">
                        <Link
                            href={item?.url}
                            className="left__title font-bold text-fs-13 sm:text-2xl lg:text-fs-42 text-blue-1"
                        >
                            {item?.title}
                        </Link>
                        <p
                            className="left_subtitle font-medium text-fs-9 sm:text-base lg:text-fs-24 text-dark"
                            dangerouslySetInnerHTML={renderStringToHtml(
                                item?.description
                            )}
                        />
                        <div className="left__action">
                            <Link href={item?.url} className="btn-next">
                                <img
                                    src="/icons/ic-chevron-right.svg"
                                    alt="ic-next"
                                />
                            </Link>
                        </div>
                    </div>
                    <Link href={item?.url} className="block__right">
                        <img src={item?.thumbnail} alt={item?.title} />
                    </Link>
                </div>
            ))}
        </div>
    );
};
export default HomeArticle;
