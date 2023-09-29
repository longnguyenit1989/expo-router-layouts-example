import { Link, useRouter } from "expo-router";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Page() {

  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>

        <View style={styles.main}>
          <Text style={styles.title}>Stack</Text>
          <Link href="/stack/second" style={styles.subtitle}>
            Next
          </Link>
        </View>

        <Button onPress={() => {router.push('/stack/second')}} title = 'Push Second'/>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
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
