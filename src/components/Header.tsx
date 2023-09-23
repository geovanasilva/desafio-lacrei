import { Nunito } from "next/font/google";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nunito = Nunito({
  subsets: ["latin"],
  display: "fallback",
});

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background: #eee;
  padding: 0.5rem 4rem;
  align-items: center;
  color: #018762;
  font-weight: bold;
  a {
    font-size: 2rem;
    font-style: normal;
    line-height: normal;
  }
`;

const Navbar = styled.nav`
  display: flex;
  gap: 2.5rem;
  justify-content: space-between;
  a {
    text-decoration: none;
    font-size: 1rem;
    color: #1f1f1f;
    &:hover {
      cursor: pointer;
      color: #018762;
    }
  }
  .active {
    color: #018762;
  }
`;

export default function Header() {
  const pathname = usePathname();
  return (
    <HeaderContainer className={`${nunito.className}`}>
      <a>Lacrei</a>
      <Navbar>
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          href="/user-person"
          className={pathname === "/user-person" ? "active" : ""}
        >
          Pessoa Usuária
        </Link>
        <Link
          href="/profissional-person"
          className={pathname === "/profissional-person" ? "active" : ""}
        >
          Profissional
        </Link>
      </Navbar>
    </HeaderContainer>
  );
}
