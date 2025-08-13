import Image from 'next/image';
import Link from 'next/link';

import { OWNER_NAME } from '../../constants/author.js';

import styles from './header.module.scss';
import utilStyles from '../../styles/util.module.scss';

export function HomeHeader() {
  return (
    <header className={styles.header}>
      <Image
        className={utilStyles.borderCircle}
        src="/images/profile.jpg"
        width={144}
        height={144}
        alt={OWNER_NAME}
        priority
      />

      <h1 className={utilStyles.heading2Xl}>{OWNER_NAME}</h1>
    </header>
  );
}

export function OtherHeader() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Image
            className={utilStyles.borderCircle}
            src="/images/profile.jpg"
            width={108}
            height={108}
            alt={OWNER_NAME}
            priority
          />
        </a>
      </Link>

      <h2 className={utilStyles.headingLg}>
        <Link href="/">
          <a className={utilStyles.colorInherit}>{OWNER_NAME}</a>
        </Link>
      </h2>
    </header>
  );
}
