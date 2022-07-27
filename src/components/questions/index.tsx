import React from "react";
import { Text } from "react-native";
import Data from "../../data/badAnswers/index.json";
import { Container } from "./styles";

const Questions = () => {
  // Props tem que ser : title, answer1, answer2, e se tiver answer3, renderizar condicionalmente. Todas as respostas são botões que devem
  // permanecer selecionados, e caso o usuário troque a resposta, ele deve ser deselecionado.
  console.table(Data);
  return (
    <Container>
      <Text> Perguntas </Text>
    </Container>
  );
};

export default Questions;
