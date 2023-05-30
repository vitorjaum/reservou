import { StyleSheet, Text, TextInput, View } from "react-native";

export default function TextBox({ title, placeholder }) {
  return (
    <View style={styles.component}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputBox}>
        <TextInput placeholder={placeholder} style={styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    width: "90%",
  },
  title: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
    color: "#666666",
    fontWeight: "400",
    textAlign: "left",
    lineHeight: 24,
    paddingVertical: 10,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    padding: 15,
    border: "1px solid #666666",
    borderRadius: 5,
    filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.2))",
    fontFamily: "'Poppins', sans-serif",
    fontSize: 12,
    color: "#666666",
    fontWeight: "400",
    textAlign: "left",
    lineHeight: 18,
  },
});
