import { create } from "zustand";

//define the type of the store
type AdviceStore = {
  advice: string;
  fetchAdviceAsync: () => Promise<void>;
};

//create the store
export const useAdviceStore = create<AdviceStore>((set) => ({
  advice: "Press the button to get advice",
  fetchAdviceAsync: async () => {
    try {
      const id = Math.floor(Math.random() * 100) + 1;
      const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
      const { slip } = await response.json();
      set({ advice: slip.advice });
    } catch (error) {
      console.log(error);
    }
  },
}));
