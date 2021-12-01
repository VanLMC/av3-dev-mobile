import React from "react";

import Routes from "./routes";

import { LogBox } from "react-native";

import { UsuarioProvider } from "./contexts/user";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer", "AsyncStorage has been!", "Bottom Tab"]);
  return (
    <UsuarioProvider>
      <Routes />
    </UsuarioProvider>
  );
}
