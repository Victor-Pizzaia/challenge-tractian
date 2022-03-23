import { About, Header, Introduce, NextHeader, Solutions } from "../components";
import { content } from "../data";
import * as Styled from "../styles/home.styled";

export default function Home() {
  return (
    <>
      <NextHeader title={content.nextHeaderTitle} />
      <Header navItems={content.navItens} />
      <Styled.Main>
        <Introduce
          title={content.introduce.title}
          description={content.introduce.description}
          link={content.introduce.link}
        />
        <About content={content.about} />
        <Solutions
          content={content.solutions.content}
          services={content.solutions.services}
        />
        {/* 
        <Choose />
        <Contact /> */}
      </Styled.Main>
      {/* <Footer /> */}
    </>
  );
}
