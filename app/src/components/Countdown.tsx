import React, { useState, useEffect } from "react";

export const Countdown = ({ targetDate }: any) => {
  const [timeRemaining, setTimeRemaining] = useState<any>(null);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    const interval = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      {timeRemaining && (
        <>
          <span>{timeRemaining.days} days, </span>
          <span>{timeRemaining.hours} hours, </span>
          <span>{timeRemaining.minutes} minutes, </span>
          <span>{timeRemaining.seconds} seconds </span>
          until the Treasury Race event starts!
        </>
      )}
    </div>
  );
};
