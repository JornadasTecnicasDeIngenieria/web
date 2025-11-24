import React from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export const siteTitle = 'JTI 2025 - Web del evento';

export default function Layout({ children, home, page }) {
  return (
    <>
      <header>
        <Header />
      </header>

      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
