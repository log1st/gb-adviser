import { UiButtonOrLink, UiHeaderContainer } from "@gb-adviser/ui";
import { UiImage } from "@gb-adviser/ui/src/elements/image";
import { getIndexRoute } from "../../providers/routes.ts";

import logo from "../../assets/logo.svg";
import { HeaderActions } from "./header/HeaderActions.tsx";
import { HeaderSearch } from "./header/HeaderSearch.tsx";
import { HeaderSide } from "./header/HeaderSide.tsx";

export function Header() {
  return (
    <UiHeaderContainer
      logo={
        <UiButtonOrLink to={getIndexRoute()}>
          <UiImage src={logo} height={38} />
        </UiButtonOrLink>
      }
      actions={<HeaderActions />}
      search={<HeaderSearch />}
      side={<HeaderSide />}
    />
  );
}
