import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import Illustration from "../../assets/illustration.png";
import ButtonIcon from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import Home from "../Home";
import { Routes } from "../../routes";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home" as any);
  }
  return (
    <View style={styles.Container}>
      <Image source={Illustration} style={styles.Image} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{"\n"} e organize suas{"\n"} jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>
        <ButtonIcon onPress={handleSignIn} />
      </View>
    </View>
  );
}

export default SignIn;
