import * as Styled from "./Footer.styled";

export function Footer({ text }) {
  return (
    <Styled.Wrapper>
      <Styled.Text>{text}</Styled.Text>
      <Styled.SocialMedias>
        <Styled.SocialLink
          href="https://www.facebook.com/tractian"
          target="_blank"
        >
          <Styled.SocialImage src="facebook.png" />
        </Styled.SocialLink>

        <Styled.SocialLink
          href="https://www.instagram.com/tractian/"
          target="_blank"
        >
          <Styled.SocialImage src="instagram.svg" />
        </Styled.SocialLink>

        <Styled.SocialLink
          href="https://www.linkedin.com/company/tractian/"
          target="_blank"
        >
          <Styled.SocialImage src="linkedin.svg" />
        </Styled.SocialLink>

        <Styled.SocialLink
          href="https://www.youtube.com/c/TRACTIAN"
          target="_blank"
        >
          <Styled.SocialImage src="youtube.svg" />
        </Styled.SocialLink>
      </Styled.SocialMedias>
    </Styled.Wrapper>
  );
}
