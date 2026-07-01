import { useRecordStore } from "@/store/useRecordStore";
import { CameraView } from "expo-camera";
import { router } from "expo-router";
import { RefObject, useRef } from "react";
import { Animated, Pressable } from "react-native";

interface Props {
  camera: RefObject<CameraView | null>;
}

const MIN_RECORD_MS = 1000;

export function RecordButton({ camera }: Props) {
  const isRecording = useRecordStore((state) => state.isRecording);
  const startTime = useRecordStore((state) => state.startTime);
  const startRecordingStore = useRecordStore((state) => state.startRecording);
  const stopRecordingStore = useRecordStore((state) => state.stopRecording);
  const innerScale = useRef(new Animated.Value(1)).current;
  const borderRadius = useRef(new Animated.Value(28)).current;

  const toggleRecord = () => {
    if (!camera.current) return;
    if (!isRecording) return startRecording();
    if (startTime && Date.now() - startTime < MIN_RECORD_MS) return;
    return stopRecording();
  };

  const startRecording = () => {
    Animated.parallel([
      Animated.spring(innerScale, { toValue: 0.5, useNativeDriver: false }),
      Animated.spring(borderRadius, { toValue: 6, useNativeDriver: false }),
    ]).start();
    startRecordingStore(camera.current);
  };

  const stopRecording = async () => {
    Animated.parallel([
      Animated.spring(innerScale, { toValue: 1, useNativeDriver: false }),
      Animated.spring(borderRadius, { toValue: 28, useNativeDriver: false }),
    ]).start();

    try {
      await stopRecordingStore(camera.current);
      router.navigate("/record/save");
    } catch (e) {
      console.warn("Failed to stop recording:", e);
    }
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
