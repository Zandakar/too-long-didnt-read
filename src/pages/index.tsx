import React from "react";

import { GetStaticProps } from "next";
import ReactGA from 'react-ga';

import { BlogGallery, IBlogGalleryProps } from "../blog/BlogGallery";
import { Meta } from "../layout/Meta";
import { IPaginationProps } from "../pagination/Pagination";
import { Main } from "../templates/Main";
import { AppConfig } from "../utils/AppConfig";
import { getAllPosts } from "../utils/Content";


ReactGA.initialize('UA-249868625-1');
ReactGA.pageview('/');
console.log("Get out of my console you nerd")

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
