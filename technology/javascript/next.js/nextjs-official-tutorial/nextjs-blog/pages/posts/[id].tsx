import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Layout } from '../../components/layout/layout.js';
import { FormattedDate } from '../../components/formatted-date/formatted-date.js';
import { getPost, getPostIds } from '../../lib/posts.js';

import utilStyles from '../../styles/util.module.scss';

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <br />
        <span className={utilStyles.lightText}>
          <FormattedDate dateString={post.date} />
        </span>
        <br />

        <section dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params.id);

  return {
    props: {
      post,
    },
  };
};
