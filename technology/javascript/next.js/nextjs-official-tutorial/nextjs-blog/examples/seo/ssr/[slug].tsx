import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { fetchJson } from '../../../utils/fetch-json';

function BlogPost({ blog }) {
  return (
    <div>
      <Head>
        <title>{blog.title} | My Blog</title>
      </Head>

      <div>
        <h1>{blog.title}</h1>
        <p>{blog.text}</p>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const blog = await fetchJson(`https://www.example.com/api/blog/${query.slug}`);

  return {
    props: {
      blog,
    },
  };
};

export default BlogPost;
