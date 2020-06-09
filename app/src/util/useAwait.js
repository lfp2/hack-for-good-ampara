import useBoolean from 'react-use/lib/useBoolean';

const useAwait = (asyncFn) => {
  const [isLoading, toggle] = useBoolean(false);
  const fetch = async (...args) => {
    toggle(true);
    const data = await asyncFn(...args);
    toggle(false);
    return data;
  };
  return [
    isLoading,
    fetch,
    {
      toggle,
    },
  ];
};

export default useAwait;
