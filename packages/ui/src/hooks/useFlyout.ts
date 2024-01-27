import { useEffect, useState } from "react";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useFloating,
  UseFloatingOptions,
} from "@floating-ui/react";
import { arrayFrom, filteredArray } from "@gb-adviser/common";

export type UseFlyoutOptions = {
  offset?: number | [number, number];
  sameSize?: boolean;
  onFocus?(): void;
  onBlur?(): void;
} & Pick<UseFloatingOptions, "open" | "placement" | "strategy">;

export const useFlyout = <
  Reference extends HTMLElement,
  Flyout extends HTMLElement,
>({
  placement = "bottom",
  sameSize = true,
  strategy = "fixed",
  offset: offsets = [10, 0],
  open,
  onFocus,
  onBlur,
}: UseFlyoutOptions) => {
  const [referenceRef, setReferenceRef] = useState<Reference | null>(null);
  const [floatingRef, setFloatingRef] = useState<Flyout | null>(null);

  const { floatingStyles } = useFloating({
    placement,
    open,
    middleware: filteredArray([
      offset({
        mainAxis: arrayFrom(offsets)[0],
        crossAxis: arrayFrom(offsets)[1],
      }),
      shift(),
      flip(),
      sameSize &&
        size({
          apply({ rects, elements }) {
            elements.floating.style.setProperty(
              "min-width",
              `${rects.reference.width}px`,
            );
          },
        }),
    ]),
    strategy,
    whileElementsMounted: autoUpdate,
    elements: {
      reference: referenceRef,
      floating: floatingRef,
    },
  });

  useEffect(() => {
    const handleBlur = ({ relatedTarget }: FocusEvent) => {
      if (!(relatedTarget instanceof HTMLElement)) {
        onBlur?.();
        return;
      }

      if (
        relatedTarget === referenceRef ||
        referenceRef?.contains(relatedTarget)
      ) {
        return;
      }
      if (
        relatedTarget === floatingRef ||
        floatingRef?.contains(relatedTarget)
      ) {
        return;
      }
      onBlur?.();
    };

    [referenceRef, floatingRef].forEach((item) => {
      item?.addEventListener("focusout", handleBlur);
    });

    return () => {
      [referenceRef, floatingRef].forEach((item) => {
        item?.removeEventListener("focusout", handleBlur);
      });
    };
  }, [referenceRef, floatingRef, onBlur]);

  useEffect(() => {
    if (!onFocus) {
      return () => {};
    }
    referenceRef?.addEventListener("focusin", onFocus);

    return () => {
      referenceRef?.removeEventListener("focusin", onFocus);
    };
  }, [referenceRef, onFocus]);

  return {
    referenceRef,
    setReferenceRef,
    floatingRef,
    setFloatingRef,
    floatingStyles,
  };
};
