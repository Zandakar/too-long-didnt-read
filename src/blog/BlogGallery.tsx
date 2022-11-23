import React from 'react';

import { format } from 'date-fns';
// import { useRouter } from 'next/router'

import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};



const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {props.posts.map((elt) => {
        // Potential code for postpending /index.hmtl
        // // Get full URL (localhost or too-long...)
        // const { asPath } = useRouter();
        // const origin =
        //   typeof window !== 'undefined' && window.location.origin
        //     ? window.location.origin
        //     : '';

        // const URL = `${origin}${asPath}`;
        // const isDevelopmentServer = URL.includes("localhost")
        // const indexPostpend = !isDevelopmentServer ? `/index.html` : ''



        return (<li key={elt.slug} className="mb-3 flex justify-between">
          <Link href={`/posts/[slug]`}
            as={`/posts/${elt.slug}`}>
            <a>
              <h2>{elt.title}</h2>
            </a>
          </Link>

          <div className="text-right">
            {format(new Date(elt.date), 'LLL d, yyyy')}
          </div>
        </li>)
      })}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
