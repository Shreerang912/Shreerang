import { useState, useEffect } from 'react';

export const useLocalTime = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const getIST = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + 5.5 * 3600000);
      return ist.toTimeString().slice(0, 5); // "HH:MM"
    };

    setTime(getIST());
    const interval = setInterval(() => {
      setTime(getIST());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return time;
};
