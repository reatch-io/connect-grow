import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEO = ({
  title = "Reatch.io — Customer Engagement Platform | Email & WhatsApp Marketing",
  description = "Connect, communicate, and convert with Reatch.io. Intelligent email and WhatsApp campaigns, advanced segmentation, real-time analytics, and powerful automation for growth-minded teams.",
  keywords = "customer engagement, email marketing, WhatsApp marketing, marketing automation, campaign management, multi-channel marketing, customer communication platform, email campaigns, WhatsApp business API, marketing analytics",
  canonical,
  ogType = "website",
  ogTitle,
  ogDescription,
  ogImage = "https://reatch.io/reatch-logo.png",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  noindex = false,
  structuredData,
}: SEOProps) => {
  const siteUrl = "https://reatch.io";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Reatch.io" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

