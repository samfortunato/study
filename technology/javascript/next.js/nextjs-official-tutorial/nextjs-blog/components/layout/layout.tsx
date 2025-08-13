import Head from 'next/head';

import { HomeHeader, OtherHeader } from '../header/header.js';
import { BackToHomeLink } from '../back-to-home-link/back-to-home-link.js';
import { OPEN_GRAPH_IMG_URL, SITE_TITLE } from '../../constants/meta.js';

import styles from './layout.module.scss';

type Props = {
  children: React.ReactNode;
  isHome?: boolean;
};

export function Layout({ children, isHome }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next.js tutorial" />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={OPEN_GRAPH_IMG_URL} />
      </Head>

      {isHome ? <HomeHeader /> : <OtherHeader />}

      <main>{children}</main>

      {!isHome && <BackToHomeLink />}
    </div>
  );
}
