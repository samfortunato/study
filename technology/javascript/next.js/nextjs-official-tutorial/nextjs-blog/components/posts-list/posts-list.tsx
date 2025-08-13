import Link from 'next/link';

import { FormattedDate } from '../formatted-date/formatted-date.js';

import { PostData } from '../../types/post-data.js';

import utilStyles from '../../styles/util.module.scss';

type PostsListProps = {
  posts: PostData[];
};

type PostListItemProps = {
  id: string;
  title: string;
  date: string;
};

export function PostsList({ posts }: PostsListProps) {
  return (
    <ul className={utilStyles.list}>
      {posts.map(postData => <PostListItem {...postData} />)}
    </ul>
  );
}

function PostListItem({ id, title, date }: PostListItemProps) {
  return (
    <li className={utilStyles.listItem} key={id}>
      <Link href={`/posts/${id}`}>{title}</Link>
      <br />

      <small className={utilStyles.lightText}>
        <FormattedDate dateString={date} />
      </small>
    </li>
  );
}
