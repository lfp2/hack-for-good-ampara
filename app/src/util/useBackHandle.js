import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';

const useBackHandle = (onBackPress) => {
  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [onBackPress]),
  );
};

export default useBackHandle;
