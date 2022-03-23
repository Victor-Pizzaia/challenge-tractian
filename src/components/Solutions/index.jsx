import * as Styled from "./Solutions.styled";

export function Solutions({ content, services }) {
  return (
    <Styled.Wrapper id="services">
      <Styled.IntroduceWrapper>
        <Styled.Title>{content.title}</Styled.Title>
        <Styled.Description>{content.description}</Styled.Description>
      </Styled.IntroduceWrapper>
      <Styled.ServicesWrapper>
        {services.map((service, index) => (
          <Styled.Service key={index}>
            <Styled.Image>{service.icon}</Styled.Image>
            <Styled.ContentWrapper>
              <Styled.ServicesTitle>{service.title}</Styled.ServicesTitle>
              <Styled.Description>{service.description}</Styled.Description>
            </Styled.ContentWrapper>
          </Styled.Service>
        ))}
      </Styled.ServicesWrapper>
    </Styled.Wrapper>
  );
}
