import React from "react";

import { GetStaticProps } from "next";

import { BlogGallery, IBlogGalleryProps } from "../blog/BlogGallery";
import { Meta } from "../layout/Meta";
// import { useEffect } from 'react'

import { IPaginationProps } from "../pagination/Pagination";
import { Main } from "../templates/Main";
import { AppConfig } from "../utils/AppConfig";
import { getAllPosts } from "../utils/Content";
import ReactGA from 'react-ga';
import { useRouter } from 'next/router'


ReactGA.initialize('G-5LX7ZPWY7X');
ReactGA.pageview('/');
console.log("Get out of my console you nerd")

// const router = useRouter()

// useEffect(() => {
//   const handleRouteChange = () => {
//     ReactGA.set({ page: location.pathname });
//     ReactGA.pageview(location.pathname)
//   }

//   router.events.on('routeChangeComplete', handleRouteChange)

//   // If the component is unmounted, unsubscribe
//   // from the event with the `off` method:
//   return () => {
//     router.events.off('routeChangeComplete', handleRouteChange)
//   }
// }, [])

const Index = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="Home" description={AppConfig.description} />}>
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(["title", "date", "slug"]);
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = "/page2";
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Index;
