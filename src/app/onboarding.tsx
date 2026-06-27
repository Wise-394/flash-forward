import Screen from "@/components/Screen";
import { Theme } from "@/components/Theme";
import { StyleSheet, Text, View } from "react-native";
export default function OnboardingScreen() {
  return (
    <Screen>
      <Text style={[style.title, style.textDefault, { textAlign: "left" }]}>
        Flash Forward
      </Text>
      <View style={style.container}>
        <View style={style.heroContainer}>
          <Text style={style.textDefault}>Record Today, Watch Tommorow</Text>
          <Text style={style.textDefault}>
            send a video to your future self, Sealed Until the day you choose
          </Text>
        </View>
        <View style={style.buttonContainer}>
          <Text style={style.textDefault}>Continue</Text>
        </View>
      </View>
    </Screen>
  );
}

const style = StyleSheet.create({
  title: { fontSize: 22 },
  textDefault: { color: Theme.colors.textPrimary, textAlign: "center" },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  heroContainer: {
    marginTop: "auto",
  },
  buttonContainer: {
    marginTop: "auto",
  },
});

// TODO MAKE A APPTEXT
