import { useEffect, useRef, useState } from 'react';

export const useUpdateCheck = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [currentHash, setCurrentHash] = useState(null);
  const lastWakeTime = useRef(0);

  const baseUrl = import.meta.env.BASE_URL;

  const checkVersion = async () => {
    try {
      const url = `${baseUrl.replace(/\/$/, '')}/version.json?t=${Date.now()}`;
      const response = await fetch(url, { cache: 'no-store' });

      if (!response.ok) return; // Avoid parsing 404 HTML as JSON

      const data = await response.json();

      if (currentHash && data.hash !== currentHash) {
        setUpdateAvailable(true);
      } else {
        setCurrentHash(data.hash);
      }
    } catch (e) {
      console.error("Update check failed", e);
    }
  };

  useEffect(() => {
    checkVersion();

    const interval = setInterval(checkVersion, 10 * 60 * 1000);

    const onWake = () => {
      const now = Date.now();
      if (now - lastWakeTime.current < 100) return;

      if (document.visibilityState === 'visible') {
        lastWakeTime.current = now;
        checkVersion();
      }
    };

    window.addEventListener('pageshow', onWake);
    window.addEventListener('load', onWake);
    window.addEventListener('resize', onWake);
    document.addEventListener('visibilitychange', onWake);

    return () => {
      clearInterval(interval);
      window.removeEventListener('pageshow', onWake);
      window.removeEventListener('load', onWake);
      window.removeEventListener('resize', onWake);
      document.removeEventListener('visibilitychange', onWake);
    };
  }, [currentHash]);

  return { updateAvailable, refresh: () => window.location.reload() };
}
