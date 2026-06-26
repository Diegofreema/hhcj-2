import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures effect runs only once on mount

  return windowSize;
}
