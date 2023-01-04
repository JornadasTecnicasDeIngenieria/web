import Head from "next/head";
import Layout from "@layouts/BlogLayout"
import { getSortedPostsData } from "@scripts/posts";
import React from "react";
import Cards from "@components/PostCards";
import { BlogSection, BlogIntro } from "@components/StyledComponents";
import { Container } from "@mui/material"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { 
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout page>
      <BlogSection>
        <Container>
          <BlogIntro>Últimas entradas</BlogIntro>
          <Cards allPostsData={allPostsData}></Cards>
        </Container>
      </BlogSection>
    </Layout>
  );
}

