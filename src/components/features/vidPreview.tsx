import Ionicons from "@expo/vector-icons/Ionicons";
import { Dimensions, View } from "react-native";
export function VidPreview() {
  return (
    <View className="relative h-[30%] w-full items-center justify-center rounded-lg bg-text-primary">
      <PlayFunction />
    </View>
  );
}

function PlayFunction() {
  const { width } = Dimensions.get("window");
  const iconSize = width * 0.22;
  return (
    <View className="items-center justify-center p-2">
      <Ionicons name="play-circle-outline" size={iconSize} color={"#3a5a8a"} />
    </View>
  );
}
