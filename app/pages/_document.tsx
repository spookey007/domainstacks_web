import { Html, Head, Main, NextScript } from 'next/document';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'call-us-selector': any;
    }
  }
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          defer
          src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
          id="tcx-callus-js"
          charSet="utf-8"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  );
}
