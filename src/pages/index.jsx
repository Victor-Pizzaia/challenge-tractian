import { Header } from "../components/Header";
import { Introduce } from "../components/Introduce";
import { NextHeader } from "../components/NextHeader";
import { About } from "../components/About";
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
        <About
          content={
            "Queremos que todos os profissionais de manutenção tenham acesso ao monitoramento online de equipamentos, e a uma plataforma “braço direito” que analisa, fornece insights valiosos, otimiza rotinas e permite tomada de decisões de forma prática e eficaz. Tudo isso só é possível combinando uma plataforma fácil de usar com um sensor IoT rápido de implementar."
          }
        />
        {/* 
        <Services />
        <Choose />
        <Contact /> */}
      </Styled.Main>
      {/* <Footer /> */}
    </>
  );
}
