import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Avatar from "../Avatar/index";
// import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage="http://github.com/Tiagao18.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Ola,</Text>
          <Text style={styles.username}>Rodrigo</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitoria</Text>
      </View>
    </View>
  );
};

export default Profile;
