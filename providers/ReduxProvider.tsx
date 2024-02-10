"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../services/redux/store";

interface ChildrenProps {
  children: React.ReactNode
}

export function ReduxProvider({ children }: ChildrenProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
