import Link from 'next/link';
import Head from 'next/head';

import { Layout } from '../components/layout/layout.js';
import { ProfilePicture } from '../components/profile-picture/profile-picture.js';

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>

        <ProfilePicture />

        <h1>First Post</h1>
        <h2><Link href="/">Back to home</Link></h2>
      </Layout>
    </>
  );
}
