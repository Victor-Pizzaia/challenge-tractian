import React from "react";
import { Button } from "../Button";
import * as Styled from "./Contact.styled";
import { constants } from "../../constants/constanst";

export function Contact({ title, mail, message, buttonMessage }) {
  const [sender, setSender] = React.useState({ mail: "", message: "" });
  const changeState = event => {
    const { name, value } = event.target;
    setSender(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Styled.Wrapper id="contact">
      <Styled.Title>{title}</Styled.Title>
      <Styled.Email
        placeholder={mail}
        value={sender.mail}
        name="mail"
        onChange={changeState}
      ></Styled.Email>
      <Styled.Message
        placeholder={message}
        value={sender.message}
        name="message"
        onChange={changeState}
      ></Styled.Message>
      <Button
        style={{ width: 200 }}
        onClick={() =>
          open(
            `mailto:${constants.email}?subject=${sender.mail}&body=${sender.message}`
          )
        }
      >
        {buttonMessage}
      </Button>
    </Styled.Wrapper>
  );
}
