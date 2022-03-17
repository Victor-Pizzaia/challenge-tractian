import { Header } from "../components/Header/Header";
import { NextHeader } from "../components/NextHeader/NextHeader";

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
    </>
  );
}
