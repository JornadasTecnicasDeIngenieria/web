import React from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";

const name = "Notas en {código}.";
export const siteTitle = "Your Blog Title";

export default function Layout({ children, home, page }) {
    return (
      <>
        <header>
          <Header />
        </header>
  
  
        {home ? (
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Notas en {código}." />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
        ) : (
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
        )}
  
        {page ? (
          <main>{children}</main>
        ) : (
          <div className={styles.container}>
            <main>{children}</main>
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Volver al Home</a>
              </Link>
            </div>
          </div>
        )}
        <footer>
          <Footer />
        </footer>
  
      </>
    );
  }