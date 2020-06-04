import { useState, useEffect, useCallback } from 'react';
import { Dimensions } from 'react-native';

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
const useOrientation = () => {
  const [orientation, setOrientation] = useState(
    isPortrait() ? 'portrait' : 'landscape',
  );

  const handleDimensionsChange = useCallback(() => {
    setOrientation(isPortrait() ? 'portrait' : 'landscape');
  }, []);

  useEffect(() => {
    Dimensions.addEventListener('change', handleDimensionsChange);
    return () => {
      Dimensions.removeEventListener('change', handleDimensionsChange);
    };
  }, [handleDimensionsChange]);

  return orientation;
};

export default useOrientation;
