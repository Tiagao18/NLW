import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Profile from "../../components/Profile/index";

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <View>
      <View style={styles.header}></View>
      <Profile />
    </View>
  );
};

export default Home;
