import Link from 'next/link';
import styled from 'styled-components';

const ImportantLink = styled.a`
  color: red;
`;

function NavLink({ href, name }) {
  return (
    <Link href={href} passHref>
      <ImportantLink>{name}</ImportantLink>
    </Link>
  );
}

export default NavLink;
