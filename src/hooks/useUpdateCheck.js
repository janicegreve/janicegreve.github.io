import { useEffect, useState } from 'react';

export const useUpdateCheck = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [currentHash, setCurrentHash] = useState(null);

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

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkVersion();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
    return () => clearInterval(interval);
  }, [currentHash]);

  return { updateAvailable, refresh: () => window.location.reload() };
}
