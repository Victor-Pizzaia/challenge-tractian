import Head from "next/head";

export function NextHeader({ title }) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="title" content="Tractian Challenge" />
      <meta property="name" content="Tractian Challenge" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <title>{title}</title>
    </Head>
  );
}
