const SITE = "https://allyonoarcade.com";

/** Article + BreadcrumbList JSON-LD for a blog post. */
export default function ArticleSchema({
  headline,
  description,
  path,
  image,
  published,
  modified,
  crumb,
}: {
  headline: string;
  description: string;
  /** e.g. "/blog/yono-arcade-slots-guide" */
  path: string;
  /** Site-relative image path, e.g. "/images/guides/x.webp" */
  image: string;
  published: string;
  modified: string;
  crumb: string;
}) {
  const url = `${SITE}${path}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: `${SITE}${image}`,
    author: { "@type": "Organization", name: "AllYonoArcade.com", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "AllYonoArcade.com",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    },
    datePublished: published,
    dateModified: modified,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: crumb, item: url },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
