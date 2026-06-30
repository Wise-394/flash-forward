import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { AppText } from "./appText";

interface Props {
  open: boolean;
  setOpen: (arg0: boolean) => void;
  date: Date;
  setDate: (arg0: Date) => void;
  label?: string;
}

export function AppDatePicker({ open, setOpen, date, setDate, label }: Props) {
  return (
    <View className="self-start">
      {label ? (
        <AppText className="mb-1 text-xs text-gray-500">{label}</AppText>
      ) : null}

      <Pressable
        onPress={() => setOpen(true)}
        className="flex-row items-center gap-2 rounded-lg border bg-surface-raised px-4 py-3"
      >
        <AppText className="text-base text-text-primary placeholder:text-text-muted">
          {date.toLocaleDateString()}
        </AppText>
        <Ionicons name="calendar-outline" size={20} color="#6b7280" />
      </Pressable>

      <DatePicker
        modal
        date={date}
        mode="date"
        open={open}
        onConfirm={(selectedDate) => {
          setOpen(false);
          setDate(selectedDate);
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
}
