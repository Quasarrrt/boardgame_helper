"use client";
import { Provider } from "effector-react";
import { authStore } from "@/app/store/store";

export function Providers({ children }) {
  return <Provider store={authStore}>{children}</Provider>;
}
