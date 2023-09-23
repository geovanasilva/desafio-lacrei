import { Nunito } from "next/font/google";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const nunito = Nunito({
  subsets: ["latin"],
  display: "fallback",
});

const Content = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 4rem 4rem 0px;
`;

const InfoContainer = styled.div`
  max-width: 540px;
  h2 {
    color: #1f1f1f;
    font-size: 3rem;
  }
  p {
    color: #515151;
    font-size: 1.5rem;
    margin-top: 2rem;
  }
  .description-detail {
    padding-left: 1rem;
    border-left: 5px solid #018762;
    font-size: 1.5rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  max-width: 453px;
  a {
    border-radius: 8px;
    border: 2px solid #018762;
    padding: 0.75rem 2rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-weight: bold;
    text-decoration: none;
  }
  .user-person {
    color: #fff;
    background: #018762;
  }
  .profissional-person {
    color: #018762;
    background: #fff;
  }
`;

const ImgContainer = styled.div`
  img {
    width: 555px;
    aspect-ratio: auto 555 / 421;
    height: 421px;
  }
`;

interface MainProps {
  title: string;
  description?: string;
  isHomePage: boolean;
  image: string;
  alt: string;
}

export default function Main({
  title,
  description,
  isHomePage,
  image,
  alt,
}: MainProps) {
  return (
    <Content className={`${nunito.className}`}>
      <InfoContainer>
        <h2>{title}</h2>
        {isHomePage ? (
          <>
            <p>{description}</p>
            <ButtonsContainer>
              <Link className="user-person" href="/user-person">
                Pessoa Usuária
              </Link>
              <Link className="profissional-person" href="/profissional-person">
                Profissional
              </Link>
            </ButtonsContainer>
          </>
        ) : (
          <p className="description-detail">
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
            realizado por profissionais de qualidade e que atendam às suas
            necessidades de forma segura e acolhedora.
          </p>
        )}
      </InfoContainer>
      <ImgContainer>
        <Image priority src={image} alt={alt} />
      </ImgContainer>
    </Content>
  );
}
