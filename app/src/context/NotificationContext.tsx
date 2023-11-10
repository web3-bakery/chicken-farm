// NotificationContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";

interface NotificationContextType {
  showNotification: (message: string, severity: AlertColor) => void;
}

interface NotificationProviderProps {
  children: ReactNode;
}

interface NotificationState {
  open: boolean;
  message: string;
  severity: AlertColor;
}

const defaultState: NotificationState = {
  open: false,
  message: "",
  severity: "info",
};

const NotificationContext = createContext<NotificationContextType>({
  showNotification: () => {}, // default empty function
});

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  const [notification, setNotification] =
    useState<NotificationState>(defaultState);

  const showNotification = useCallback(
    (message: string, severity: AlertColor = "info") => {
      setNotification({ open: true, message, severity });
    },
    []
  );

  const closeNotification = useCallback(
    (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }
      setNotification(defaultState);
    },
    []
  );

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={closeNotification}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};
