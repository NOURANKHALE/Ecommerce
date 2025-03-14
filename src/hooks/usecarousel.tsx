import { useState, useCallback } from "react";

export function useCarousel (totalItems: number, itemsPerPage: number) {
    const totalSlides = Math.ceil(totalItems / itemsPerPage);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevious = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : totalSlides - 1
      );
    }, [totalSlides]);
  
    const handleNext = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < totalSlides - 1 ? prevIndex + 1 : 0
      );
    }, [totalSlides]);
  
    return { currentIndex, handlePrevious, handleNext };
  };