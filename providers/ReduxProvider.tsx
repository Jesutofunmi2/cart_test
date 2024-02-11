"use client";

import { Provider } from "react-redux";
import { store } from "../services/redux/store";

interface ChildrenProps {
  children: React.ReactNode;
}
export function ReduxProvider({ children }: ChildrenProps) {
  return <Provider store={store}>{children}</Provider>;
}
