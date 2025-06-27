import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator />
      <ActivityIndicator size={"large"} color={"green"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
