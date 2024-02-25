import { create } from "zustand";
import { createAuthSlice } from "./createAuthSlice";
import { createUserProfileSlice } from "./createUserProfileSlice";

const useUserStore = create((...a) => ({
    ...createAuthSlice(...a),
    ...createUserProfileSlice(...a),
}))

export default useUserStore