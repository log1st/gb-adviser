import { useCallback, useEffect, useState } from "react";

export const useFocused = (initialValue = false, enabled = true) => {
  const [focused, setFocused] = useState(initialValue);

  const toggleFocused = useCallback(
    (newFocused?: boolean) => {
      if (!enabled) {
        return;
      }
      setFocused((oldFocused) => newFocused ?? !oldFocused);
    },
    [enabled],
  );

  const focus = useCallback(() => {
    if (!enabled) {
      return;
    }
    setFocused(true);
  }, [enabled]);

  const blur = () => {
    setFocused(false);
  };

  useEffect(() => {
    if (!initialValue) {
      return;
    }
    focus();
  }, [initialValue, focus]);

  return {
    focused,
    setFocused,
    toggleFocused,
    focus,
    blur,
  };
};
