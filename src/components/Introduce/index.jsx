import * as Styled from "./Introduce.styled";

export function Introduce({ title, description, link }) {
  return (
    <Styled.Wrapper id="">
      <Styled.MainContent>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        <Styled.Button
          onClick={() => (location.href = "https://tractian.com/")}
        >
          {link}
        </Styled.Button>
      </Styled.MainContent>
      <Styled.ImageWrapper>
        <Styled.Image src="/QualityChart.png" />
      </Styled.ImageWrapper>
    </Styled.Wrapper>
  );
}
