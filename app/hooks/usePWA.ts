import { useEffect, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export function usePWA() {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [offlineReady, setOfflineReady] = useState(false);

  const {
    needRefresh: [needRefreshValue, setNeedRefreshValue],
    offlineReady: [offlineReadyValue, setOfflineReadyValue],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
      console.log('Service Worker registered successfully');

      if (registration) {
        setInterval(() => {
          registration.update();
        }, 60 * 60 * 1000); // 1 hour
      }
    },
    onRegisterError(error) {
      console.error('Error registering Service Worker:', error);
    },
  });

  useEffect(() => {
    setNeedRefresh(needRefreshValue);
  }, [needRefreshValue]);

  useEffect(() => {
    setOfflineReady(offlineReadyValue);
  }, [offlineReadyValue]);

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
    setOfflineReadyValue(false);
    setNeedRefreshValue(false);
  };

  const reload = () => {
    updateServiceWorker(true);
  };

  return {
    needRefresh,
    offlineReady,
    close,
    reload,
  };
}
