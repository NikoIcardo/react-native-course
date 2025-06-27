import { StyleSheet, SafeAreaView, View, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>Hello</Text>
        <Text style={styles.text}>Text 2</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.childView}></View>
      </View>
      <View style={styles.view3}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  view1: {
    height: 200,
    width: 200,
    backgroundColor: "#ff9485",
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    backgroundColor: "#000000",
    height: 150,
    width: 150,
    margin: 100,
    marginLeft: 20,
    padding: 40,
  },
  text: {
    fontSize: 50,
  },
  view3: {
    backgroundColor: "red",
    height: 150,
    width: 150,
  },
  childView: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
});
