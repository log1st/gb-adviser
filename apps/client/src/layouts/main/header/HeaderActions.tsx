import { UiHeaderAction } from "@gb-adviser/ui";
import { useNotificationsCount } from "../../../api/notifications/count.ts";

export function HeaderActions() {
  const { data } = useNotificationsCount();

  return (
    <>
      <UiHeaderAction icon="comment" />
      <UiHeaderAction icon="bell" badge={data} />
    </>
  );
}
