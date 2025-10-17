import { Helmet } from "react-helmet-async";

const MetaTags = ({
  title,
  description,
  keywords,
  ogImage,
  canonical,
  noindex = false,
}) => {
  const siteUrl = "https://www.nosaigieborsports.com";
  const defaultImage = `${siteUrl}/images/og-default.jpg`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Nosa Igiebor Sports Academy" />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph */}
      {/* <meta property="og:type" content={ogType} /> */}
      <meta property="og:url" content={`${siteUrl}${canonical || ""}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Nosa Igiebor Sports Academy" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${siteUrl}${canonical || ""}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage || defaultImage} />
    </Helmet>
  );
};

export default MetaTags;