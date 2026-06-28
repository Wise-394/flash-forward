import { getUsername, setUsername } from "@/services/storage/user/userService";
import { create } from "zustand";
interface UserStore {
  username: string;
  setUsernameStore: (username: string) => void;
  clearUsername: () => void;
}

export const useAuthStore = create<UserStore>((set) => ({
  username: getUsername() ?? "",
  setUsernameStore: (username) => {
    setUsername(username);
    set({ username });
  },

  clearUsername: () => {
    setUsername("");
    set({ username: "" });
  },
}));
