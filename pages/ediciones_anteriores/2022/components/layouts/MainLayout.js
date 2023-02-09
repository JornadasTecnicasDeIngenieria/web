import React from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import { Container } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";

export const siteTitle = "JTI 2020 - Web del evento";

export default function Layout({ children, home, page }) {
  return (
    <>
      <header>
        <Header />
      </header>

      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
