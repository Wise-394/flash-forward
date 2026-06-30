import { Screen } from "@/components/Screen";
import { AppText } from "@/components/ui/appText";
import { BackButton } from "@/components/ui/backButton";
import { View } from "react-native";

export default function SaveRecording() {
  return (
    <Screen>
      {/* HEADER */}
      <View className="relative flex flex-row items-center justify-center">
        <View className="absolute left-1">
          <BackButton />
        </View>
        <AppText className="text-center text-2xl font-bold">
          New Capsule
        </AppText>
      </View>

      {/* BODY */}
    </Screen>
  );
}
