import { useState } from "react";
import styled from "@emotion/styled"
import { Container } from "@mui/material";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <AccordionContainer>
      <button
        style={{
          width: "100%",
          position: "relative",
          padding: "4px",
          background: "transparent",
          outline: "none",
          cursor: "pointer",
          color: "white",
        }}
        onClick={toggle}
        type="button"
      >
        <p>{props.title}</p>
      </button>
      <Container>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "2rem" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      /></Container>
      
    </AccordionContainer>
  );
}

const AccordionContainer = styled.div`
    width: 100%;
    background-color: #633CAE;
    color: white;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
`;

const CustomCointainer = styled.div`
max-width: 800px;
padding: 2rem;
`;