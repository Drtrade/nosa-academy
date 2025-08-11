import { useState, useEffect } from "react";

export const useDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-Us", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return {
    date: formatDate(dateTime),
    time: formatTime(dateTime),
  };
};
