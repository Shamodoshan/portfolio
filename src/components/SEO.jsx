import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, type = 'website' }) => {
    const siteTitle = "Shamod Oshan | Full Stack Developer Portfolio";
    const defaultDescription = "Explore the portfolio of Shamod Oshan, featuring modern web applications, UI/UX designs, and full-stack projects.";
    const defaultImage = "https://shamodoshan.github.io/portfolio/assets/portfolio.png";
    const siteUrl = "https://shamodoshan.github.io/portfolio/";

    const seoTitle = title ? `${title} | Shamod Oshan` : siteTitle;
    const seoDescription = description || defaultDescription;
    const seoImage = image || defaultImage;
    const seoUrl = url ? `${siteUrl}#${url}` : siteUrl;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />

            {/* Open Graph tags */}
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={seoImage} />
            <meta property="og:url" content={seoUrl} />
            <meta property="og:type" content={type} />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={seoUrl} />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={seoImage} />
        </Helmet>
    );
};

export default SEO;
