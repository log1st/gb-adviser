import { UiButton } from "@gb-adviser/ui";
import { getIndexRoute } from "../providers/routes.ts";

export default function ErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UiButton to={getIndexRoute()}>Go index</UiButton>
    </div>
  );
}
