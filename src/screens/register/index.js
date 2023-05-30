import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import TextBox from "../../components/TextBox";

export default function Register() {
  return (
    <>
      <View style={style.logo}>
        <Text>Página de registro</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  logo: {
    display: "flex",
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    // margin: "auto",
  },
});
