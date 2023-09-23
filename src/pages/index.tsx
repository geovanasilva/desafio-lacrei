import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import doctor from "@/assets/doctor.svg";

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
        title="Boas vindas a Lacrei Saúde"
        description="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
        isHomePage
        image={doctor}
        alt="A doctor accompanied by icons that refer to technology used in healthcare."
      />
      <Footer />
    </>
  );
}
