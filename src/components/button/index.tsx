import React from "react";

import { Container, Children } from "./styles";

interface ButtonProps {
  onPress: () => void;
  children?: React.ReactNode;
  backgroundColor?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Container onPress={props.onPress} backgroundColor={props.backgroundColor}>
      <Children>{props.children}</Children>
    </Container>
  );
};

export default Button;
