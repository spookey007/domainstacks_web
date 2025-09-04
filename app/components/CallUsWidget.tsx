'use client';

import Script from 'next/script';

export default function CallUsWidget() {
  return (
    <>
      <Script
        src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
        strategy="beforeInteractive"
        id="tcx-callus-js"
      />
      <call-us-selector
        phonesystem-url="https://1592.3cx.cloud"
        party="domainstacks"
        style={{
          position: 'fixed',
          fontSize: '16px',
          lineHeight: '17px',
          zIndex: 99999,
          right: '20px',
          bottom: '20px',
        }}
      />
    </>
  );
}
