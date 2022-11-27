import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <title>DevFolio</title>
          <meta
            name="description"
            content="Devfolio is an open source application which allows developers to create a portfolio in less than 2 minutes with just their username."
          />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="DevFolio" />
          <meta
            name="og:description"
            property="og:description"
            content="Devfolio is an open source application which allows developers to create a portfolio in less than 2 minutes with just their username."
          />
          <meta
            property="og:site_name"
            content="DevFolio - Create a portfolio in less than 2 minutes"
          />

          <meta
            name="twitter:card"
            content="DevFolio - Create a portfolio in less than 2 minutes"
          />
          <meta name="twitter:title" content="DevFolio" />
          <meta
            name="twitter:description"
            content="Devfolio is an open source application which allows developers to create a portfolio in less than 2 minutes with just their username."
          />
          <meta name="twitter:site" content="@propernoun" />
          <meta name="twitter:creator" content="@propernounco" />

          <meta
            property="og:image"
            content="https://devfolio.kumard3.me/ogImage.png"
          />
          <meta
            name="twitter:image"
            content="https://devfolio.kumard3.me/ogImage.png"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://devfolio.kumard3.me" />
          <meta property="og:title" content="DevFolio" />
          <meta
            property="og:description"
            content="Devfolio is an open source application which allows developers to create a portfolio in less than 2 minutes with just their username."
          />
          <meta
            property="og:image"
            content="https://devfolio.kumard3.me/ogImage.png"
          />
          <meta property="og:site_name" content="DevFolio" />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://devfolio.kumard3.me" />
          <meta property="twitter:title" content="DevFolio" />
          <meta
            property="twitter:description"
            content="Devfolio is an open source application which allows developers to create a portfolio in less than 2 minutes with just their username."
          />
          <meta
            property="twitter:image"
            content="https://devfolio.kumard3.me/ogImage.png"
          />
          <meta name="robots" content="Index" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          {/* <body className=" bg-white dark:bg-gradient-to-r dark:from-[#1F2937]  dark:to-[#111827] min-h-screen w-full relative text-gray-600 dark:text-white "> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
