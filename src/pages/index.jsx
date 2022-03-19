import { Header } from "../components/Header/Header";
import { Introduce } from "../components/Introduce/Introduce";
import { NextHeader } from "../components/NextHeader/NextHeader";
import * as Styled from "../styles/home.styled";

export default function Home() {
  return (
    <>
      <NextHeader title={"Tractian Challenge"} />
      <Header
        navItems={[
          { name: "Sobre nós", href: "about" },
          { name: "Serviços", href: "services" },
          { name: "Escolha a Tractian", href: "choose" },
          { name: "Contato", href: "contact" },
        ]}
      />
      <Styled.Main>
        <Introduce
          title="Monitore Online Suas Máquinas e Sua Produtividade. Tudo Isso Na Palma da Sua Mão"
          description="lorem ipsum sia dolor at samet"
          link="Faça uma demonstração"
        />
        {/* <About />
        <Services />
        <Choose />
        <Contact /> */}
      </Styled.Main>
      {/* <Footer /> */}
    </>
  );
}
