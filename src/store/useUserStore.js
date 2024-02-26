import { create } from "zustand";
import { createAuthSlice } from "./createAuthSlice";
import { createUserProfileSlice } from "./createUserProfileSlice";
import { createPostSlice } from "./createPostSlice";

const useUserStore = create((...a) => ({
    ...createAuthSlice(...a),
    ...createUserProfileSlice(...a),
    ...createPostSlice(...a),
}))

export default useUserStore