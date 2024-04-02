import Head from "next/head";
export default function CommonMeta() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
      />
      <meta name="author" content="Ankur Halder" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Adcomsys" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Adcomsys" />
      <meta
        name="twitter:description"
        content="The International Conference on Advanced Computing and Systems (AdcomSYS) will foster an excellent international forum for exchanging knowledge and the recent developments."
      />

      <meta name="twitter:site" content="@SpaceOtakuOfficial" />
      <link rel="dns-prefetch" href="https://adcomsys.vercel.app/" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="geo.placename" content="Kolkata, West Bengal, India" />
      <meta name="geo.position" content="22.476632;88.322844" />
      <meta name="geo.region" content="IN-WB" />
      <meta name="language" content="en" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="450" />
      <meta
        name="DC.Description"
        content="The International Conference on Advanced Computing and Systems (AdcomSYS) will foster an excellent international forum for exchanging knowledge and the recent developments"
      />
      <meta name="pinterest-rich-pin" content="true" />
      <meta name="rating" content="general" />
    </Head>
  );
}
