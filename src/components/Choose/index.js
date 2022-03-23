import * as Styled from "./Choose.styled";

export function Choose({ title, content }) {
  return (
    <Styled.Wrapper id="choose">
      <Styled.TitleWrapper>
        <Styled.Logo src="logoTractian.svg" />
        <Styled.Title>{title}</Styled.Title>
      </Styled.TitleWrapper>
      <Styled.Cards>
        {content.map((card, index) => (
          <Styled.Card key={index}>
            <Styled.CardTitle>{card.title}</Styled.CardTitle>
            <Styled.CardContent>{card.description}</Styled.CardContent>
          </Styled.Card>
        ))}
      </Styled.Cards>
    </Styled.Wrapper>
  );
}
