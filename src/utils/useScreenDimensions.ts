import { useEffect, useMemo, useState } from 'react';

import { maximumDeviceSizes } from '../styles/themes/default';

export const useScreenDimensions = () => {
  const [height, setHeight] = useState(window.innerHeight * (window.visualViewport?.scale || 1));
  const [width, setWidth] = useState(window.innerWidth * (window.visualViewport?.scale || 1));

  const isMobile: boolean = useMemo(() => width <= maximumDeviceSizes.mobile, [width]);

  useEffect(() => {
    const onResize = () => {
      setHeight(window.innerHeight * (window.visualViewport?.scale || 1));
      setWidth(window.innerWidth * (window.visualViewport?.scale || 1));
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return {
    height,
    isMobile,
    width,
  };
};
