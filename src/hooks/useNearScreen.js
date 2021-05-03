import { useEffect, useState, useRef } from "react";

export const useNearScreen = (isDisconnect = true) => {
  const refElement = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        && window.IntersectionObserver
        // : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          if (isDisconnect) {
            observer.disconnect();
          }
        } else {
          setShow(false);
        }
      });
      observer.observe(refElement.current);
    });
  }, [refElement]);
  return [show, refElement];
};
