import { Pressable, StyleSheet, Text } from "react-native";

export default function ButtonComp({ children, style }) {
  const cutomStyle = StyleSheet.compose(styles.button, style);
  return (
    <Pressable style={cutomStyle}>
      <Text>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E1B12C",
    borderRadius: 8,
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
    fontFamily: "'Poppins', sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    padding: 12,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#F8F8F8",
  },
});
