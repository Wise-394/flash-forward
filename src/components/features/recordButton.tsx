import { router } from "expo-router";
import { useRef, useState } from "react";
import { Animated, Pressable } from "react-native";

export function RecordButton() {
  const [recording, setRecording] = useState(false);
  const innerScale = useRef(new Animated.Value(1)).current;
  const borderRadius = useRef(new Animated.Value(28)).current;

  const toggleRecord = () => {
    if (!recording) {
      return startRecording();
    }
    return stopRecording();
  };

  const startRecording = () => {
    setRecording(true);

    Animated.parallel([
      Animated.spring(innerScale, { toValue: 0.5, useNativeDriver: false }),
      Animated.spring(borderRadius, { toValue: 6, useNativeDriver: false }),
    ]).start();
  };

  const stopRecording = () => {
    setRecording(false);

    Animated.parallel([
      Animated.spring(innerScale, { toValue: 1, useNativeDriver: false }),
      Animated.spring(borderRadius, { toValue: 28, useNativeDriver: false }),
    ]).start();

    router.navigate("/record/save");
  };

  return (
    <Pressable
      onPress={toggleRecord}
      className="w-18 h-18 items-center justify-center rounded-full border-[3px] border-text-primary p-1"
    >
      <Animated.View
        style={{ transform: [{ scale: innerScale }], borderRadius }}
        className="h-14 w-14 bg-danger"
      />
    </Pressable>
  );
}
