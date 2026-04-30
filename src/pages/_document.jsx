import Document, { Html, Head, Main, NextScript } from "next/document";

class DocumentosSite extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <title>INW Soluções</title>
          <meta name="description" content="INW Soluções" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <meta name="author" content="INW Soluções" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />

          {/* Meta Pixel Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);
                t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}
                (window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');

                fbq('init', '1367351941822679');
                fbq('track', 'PageView');
              `,
            }}
          />
          {/* End Meta Pixel Code */}
        </Head>
        <body>
          {/* Meta Pixel (noscript) */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1367351941822679&ev=PageView&noscript=1"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentosSite;
