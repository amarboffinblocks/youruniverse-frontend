import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import personaReducer from "./features/persona/slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        persona: personaReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
