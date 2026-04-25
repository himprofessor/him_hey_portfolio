import { usePWAUpdate } from "@/hooks/use-pwa-update";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function PWAUpdateNotification() {
  const { isUpdateAvailable, updateServiceWorker } = usePWAUpdate();

  if (!isUpdateAvailable) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 max-w-sm z-50">
      <Alert className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-700">
        <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">
          App Update Available
        </AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 mb-3">
          A new version of the app is ready to install.
        </AlertDescription>
        <Button
          onClick={updateServiceWorker}
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Update Now
        </Button>
      </Alert>
    </div>
  );
}
