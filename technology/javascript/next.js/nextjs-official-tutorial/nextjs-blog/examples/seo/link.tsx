import Link from 'next/link';

function NavLink({ href, name }) {
  return (
    <Link href={href}>
      <a>{name}</a>
    </Link>
  );
}
