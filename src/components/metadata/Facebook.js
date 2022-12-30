import React from 'react';

export const MetaFacebook = ({ url, title, description, image }) => {
    return (
        <>
            <meta property="og:url" content={url} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content='https://noxshield.com.vn/' />
            <meta property="fb:app_id" content="100080333867091" />
        </>
    );
};
