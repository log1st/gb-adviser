import { ChildContainerProps } from "../ChildContainer.tsx";

export type UiResponsiveUtilProps = ChildContainerProps & {
  small?: boolean;
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;

  hide?: boolean;
  show?: boolean;

  wider?: boolean;
  tighter?: boolean;
};
