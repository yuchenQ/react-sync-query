import {
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import useQueryString from './useQueryString';

function useQueryStringWithIndexValue(key, initialIndex, values) {
  const computedValues = useMemo(() => values.map((v) => v.toLowerCase()), [values]);

  const [value, onSetValue] = useQueryString(key, values[initialIndex]);
  const [index, setIndex] = useState(initialIndex);

  const onSetIndex = useCallback(
    (i) => {
      const newValue = computedValues[i];
      onSetValue(newValue);
    },
    [computedValues, onSetValue],
  );

  useEffect(
    () => {
      const newIndex = computedValues.findIndex((v) => v === value);
      setIndex(newIndex >= 0 ? newIndex : initialIndex);
    },
    [value, computedValues, initialIndex],
  );

  return [index, onSetIndex];
}

export default useQueryStringWithIndexValue;
