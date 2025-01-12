import { useState, useEffect } from "react";

let filledStarsState = 2;
let listeners: Function[] = [];

export const useStarsState = () => {
  const [filledStars, setFilledStars] = useState(filledStarsState);

  const updateStars = (value: number) => {
    filledStarsState = value;
    listeners.forEach((listener) => listener(filledStarsState));
  };

  useEffect(() => {
    const listener = (value: number) => setFilledStars(value);
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  return {
    filledStars,
    setFilledStars: updateStars,
  };
};
