import Head from 'next/head';

function IndexPage() {
  return (
    <>
      <Head>
        <title>Foo Title</title>

        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Foo Title" />
        <meta property="og:description" content="A social description" />
        <meta property="og:image" content="https://www.example.com/img/foo-page.jpg" />

        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={addProductJsonLd()} />
      </Head>

      <h1>Foo Title</h1>
      <p>Stuff that you put on your page.</p>
    </>
  );
}

function addProductJsonLd() {
  return {
    __html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Executive Anvil",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
      "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
      "sku": "0446310786",
      "mpn": "925872",
      "brand": {
        "@type": "Brand",
        "name": "ACME"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fred Benson"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.4",
        "reviewCount": "89"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/anvil",
        "priceCurrency": "USD",
        "price": "119.99",
        "priceValidUntil": "2020-11-20",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock"
      }
    }`,
  };
}

export default IndexPage;
