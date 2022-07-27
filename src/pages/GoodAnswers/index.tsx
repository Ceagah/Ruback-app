import React from "react";
import { Container } from "./styles";
import Button from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../styles/themes";

const GoodAnswers = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Button onPress={handleNavigation} backgroundColor={colors.primary}>
        Voltar
      </Button>
    </Container>
  );
};

export default GoodAnswers;
