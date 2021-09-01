import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import DiscordImg from "../../assets/discord.png";

interface ButtonIconProps {
  onPress(): void;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.6}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>Entrar com discord</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
