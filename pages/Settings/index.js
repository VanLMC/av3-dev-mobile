import React, { useContext, useState } from "react";
import { UsuarioContext } from "../../contexts/user";

import { Container, Button, ButtonText, UserEmail } from "./styles";



const Settings = () => {


  const { signOut, user } = useContext(UsuarioContext);

  return (
    <Container>
      <UserEmail>{user.email}</UserEmail>
      <Button
        onPress={() => {
          signOut();
        }}
      >
        <ButtonText>Sair do App</ButtonText>
      </Button>
    </Container>
  );
};

export default Settings;
