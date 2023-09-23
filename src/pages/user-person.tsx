import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import guysTypingMobile from "@/assets/guys-typing-mobile.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Desafio Lacrei</title>
        <meta
          name="description"
          content="Site desenvolvido para concorrer a uma vaga no Lacrei Saúde"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Main
        title="Pessoa Usuária"
        isHomePage={false}
        image={guysTypingMobile}
        alt="Three people are typing on their cell phones and leaning against a large cell phone with some scenery elements in the background"
      />
      <Footer />
    </>
  );
}
