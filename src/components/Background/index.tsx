import React, { ReactNode } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient
      style={styles.Container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}

export default Background;
