import { Screen } from "@/components/Screen";
import { AppText } from "@/components/ui/appText";
import { WideButton } from "@/components/ui/wideButton";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RecordingPage() {
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) {
    return (
      <Screen>
        <AppText>Loading</AppText>
      </Screen>
    );
  }

  if (!permission.granted) {
    return (
      <Screen>
        <AppText>We need camera permission</AppText>
        <WideButton onClick={requestPermission} label="Grant permission" />
      </Screen>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <AppText>Record</AppText>
      <CameraView style={{ flex: 1, width: "100%" }} />
    </SafeAreaView>
  );
}
// TODO ADD CAMERA LOADING
// onCameraReady={() => setCameraReady(true)}
