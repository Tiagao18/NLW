import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <LinearGradient
      style={styles.Container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}

export default Avatar;
