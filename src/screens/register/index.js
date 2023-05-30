import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import TextBox from "../../components/TextBox";
import ButtonComp from "../../components/ButtonComp";

export default function Register() {
  return (
    <>
      <View style={style.container}>
        <Image
          source={require("../../../assets/logo.svg")}
          style={style.logo}
        />
        <TextBox title="Nome" placeholder="nome" />
        <TextBox title="E-mail" placeholder="e-mail" />
        <TextBox title="Telefone" placeholder="telefone" />
        <TextBox title="Criar senha" placeholder="senha" />
        <TextBox title="Confirmar senha" placeholder="senha" />
        <ButtonComp style={style.button}>Criar conta</ButtonComp>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    width: 83,
    height: 81.98,
    marginHorizontal: "auto",
    marginVertical: 20,
  },
  button: { marginTop: 50 },
});
