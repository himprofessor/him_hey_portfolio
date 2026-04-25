import { useEffect, useState } from "react";

export interface PWAUpdate {
  isUpdateAvailable: boolean;
  updateServiceWorker: () => void;
}

export function usePWAUpdate(): PWAUpdate {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const handleControllerChange = () => {
        setIsUpdateAvailable(true);
      };

      navigator.serviceWorker.addEventListener(
        "controllerchange",
        handleControllerChange
      );

      // Check for updates periodically (every hour)
      const interval = setInterval(() => {
        navigator.serviceWorker.getRegistration().then((registration) => {
          registration?.update();
        });
      }, 60 * 60 * 1000);

      return () => {
        navigator.serviceWorker.removeEventListener(
          "controllerchange",
          handleControllerChange
        );
        clearInterval(interval);
      };
    }
  }, []);

  const updateServiceWorker = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistration().then((registration) => {
        registration?.unregister();
        window.location.reload();
      });
    }
  };

  return {
    isUpdateAvailable,
    updateServiceWorker,
  };
}
