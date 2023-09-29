import { Link, useRouter } from "expo-router";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Page() {

  // const router = useRouter();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Hello World</Text>
          <Link href="/stack" style={styles.subtitle}>
            Back
          </Link>

          {/* <Button onPress={() =>{router.back}} title='Router back'/> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
