import { Nunito } from "next/font/google";
import styled from "styled-components";
import Image from "next/image";
import facebookLogo from "../assets/facebook-logo.svg";
import instagramLogo from "../assets/instagram-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nunito = Nunito({
  subsets: ["latin"],
  display: "fallback",
});

const FooterContainer = styled.footer`
  margin: 0px 4rem;
  border-top: 1px solid #b0e0d3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0px 0.5rem;
  height: 10rem;
  nav {
    display: flex;
    gap: 2.5rem;
    a {
      gap: 2.5rem;
      cursor: pointer;
      color: rgb(31, 31, 31);
      text-decoration: none;
      transition: all 0.2s ease 0s;
    }
  }

  .active {
    font-weight: bold;
  }
  div > nav {
    display: flex;
    gap: 2.5rem;
  }
  div {
    display: flex;
    gap: 2rem;
  }
  p {
    color: #515151;
    font-size: 12px;
  }
`;

export default function Footer() {
  const pathname = usePathname();
  return (
    <FooterContainer className={`${nunito.className}`}>
      <nav>
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
      </nav>
      <div>
        <a target="_blank" href="https://www.instagram.com/lacrei.saude">
          <Image priority src={facebookLogo} alt="Facebook Logo" />
        </a>
        <a target="_blank" href="https://www.facebook.com/lacrei.saude">
          <Image priority src={instagramLogo} alt="Instagram Logo" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/lacrei">
          <Image priority src={linkedinLogo} alt="LinkedIn Logo" />
        </a>
      </div>
      <p>Desafio Front-end Lacrei</p>
    </FooterContainer>
  );
}
