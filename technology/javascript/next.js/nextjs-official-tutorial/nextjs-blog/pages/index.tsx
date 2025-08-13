import Head from 'next/head';
import { GetStaticProps } from 'next';

import { getPosts } from '../lib/posts.js';
import { Layout } from '../components/layout/layout.js';
import { PostsList } from '../components/posts-list/posts-list.js';
import { SITE_TITLE } from '../constants/meta.js';

import { PostData } from '../types/post-data.js';

import utilStyles from '../styles/util.module.scss';

type Props = {
  posts: PostData[];
};

export default function Home({ posts }: Props) {
  return (
    <Layout isHome>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Introduction</p>
        <p>Sup, bro!</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <PostsList posts={posts} />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();

  return {
    props: { posts },
  };
};
