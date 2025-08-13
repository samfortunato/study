import Link from 'next/link';

import styles from './back-to-home-link.module.scss';

export function BackToHomeLink() {
  return (
    <div className={styles.backToHome}>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </div>
  );
}
