// components/Screen.tsx
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
interface Props {
  children: React.ReactNode;
}

export default function Screen({ children }: Props) {
  return <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020810",
    padding: 10,
    paddingBottom: 50,
  },
});
