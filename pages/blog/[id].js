import Layout from "@layouts/BlogLayout";
import { getAllPostIds, getPostData } from "@scripts/posts";
import Head from "next/head";
import Image from "next/legacy/image";
import Date from "@components/date";
import { Grid } from "@mui/material";
import utilStyles from "../../styles/utils.module.css";
import { MDXRemote } from 'next-mdx-remote'
import styled from "@emotion/styled"
import Link from "@components/StyledLink"
//import wordCounter from "@scripts/wordCounter";
export default function Post({ postData }) {
    //const readingTime = wordCounter(...postData.contentHtml);
    let readingTime = "10";
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
          <meta name="description" content={postData.resume} />
          <meta property="og:title" content={postData.title} />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content={`https://jtiesit.com/blog/${postData.id}`}
          />
          <meta property="og:image" content={postData.image} />
          <meta property="og:description" content={postData.resume} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@jtiesit" />
          <meta name="twitter:title" content={postData.title} />
          <meta name="twitter:description" content={postData.resume} />
          <meta name="twitter:creator" content="@jtiesit"  />
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={`${utilStyles.lightText} ${utilStyles.inline}`}>
            <p>Por {postData.author} /&nbsp;</p>
            <p>
              <Date dateString={postData.date} />
            </p>
          </div>
          
          
          <Image src={postData.image} alt={postData.title} width={800} height={600} layout="responsive" />
          <p>&nbsp;</p>
          <MDXRemote {...postData.contentHtml} components={{ Grid, Image, Link, ImageDiv }} />
        </article>
      </Layout>
    );
  }
  
  export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }
  
  const ImageDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 1rem;
  `

  //<p className={utilStyles.lightText}>Lectura de {readingTime} min</p>