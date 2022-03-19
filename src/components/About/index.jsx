import * as Styled from "./About.styled";

export function About({ content }) {
  return (
    <Styled.Wrapper id="about">
      <Styled.ImageWrapper>
        <Styled.Image src="/Machine.webp" />
      </Styled.ImageWrapper>
      <Styled.MainContent>
        <Styled.Content>{content}</Styled.Content>
      </Styled.MainContent>
    </Styled.Wrapper>
  );
}
