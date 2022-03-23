import { Button } from "../Button";
import * as Styled from "./Contact.styled";

export function Contact({ title, mail, message, buttonMessage }) {
  return (
    <Styled.Wrapper id="contact">
      <Styled.Title>{title}</Styled.Title>
      <Styled.Email placeholder={mail}></Styled.Email>
      <Styled.Message placeholder={message}></Styled.Message>
      <Button style={{ width: 200 }}>{buttonMessage}</Button>
    </Styled.Wrapper>
  );
}
