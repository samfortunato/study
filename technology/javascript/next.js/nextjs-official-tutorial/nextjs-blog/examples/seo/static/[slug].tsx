import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

import { fetchJson } from '../../../utils/fetch-json';

function BlogPost({ blog }) {
  return (
    <>
      <Head>
        <title>{blog.title} | My Blog</title>
      </Head>

      <div>
        <h1>{blog.title}</h1>
        <p>{blog.text}</p>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchJson('https://www.example.com/api/posts');

  const paths = posts.map(({ slug }) => {
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = await fetchJson(`https://ww.example.com/api/blog/${params.slug}`);

  return {
    props: {
      blog,
    },
  };
};

export default BlogPost;
