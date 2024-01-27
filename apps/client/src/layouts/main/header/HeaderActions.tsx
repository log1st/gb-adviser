import { UiHeaderAction, UiResponsiveUtil } from "@gb-adviser/ui";
import { useNotificationsCount } from "../../../api/notifications/count.ts";

export function HeaderActions() {
  const { data } = useNotificationsCount();

  return (
    <>
      <UiResponsiveUtil small wider hide>
        <UiHeaderAction icon="magnifier" />
      </UiResponsiveUtil>
      <UiHeaderAction icon="comment" />
      <UiHeaderAction icon="bell" badge={data} />
    </>
  );
}
