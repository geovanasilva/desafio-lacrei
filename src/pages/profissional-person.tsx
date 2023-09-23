import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import profissional from "@/assets/profissional.svg";

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
        title="Profissional"
        isHomePage={false}
        image={profissional}
        alt="Five hospital employees (men and women) with some scenery elements in the background"
      />
      <Footer />
    </>
  );
}
