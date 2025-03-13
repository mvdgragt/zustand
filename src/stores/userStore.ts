import { create } from "zustand";

//define the type of the store
type UserStore = {
  userName: string;
  setUserName: (name: string) => void;
};

//create the store
export const useUserStore = create<UserStore>((set) => ({
  userName: "John",
  setUserName: (name) => set({ userName: name }),
}));
