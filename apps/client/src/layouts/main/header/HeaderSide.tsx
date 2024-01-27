import { UiAvatar, UiDropdownTrigger } from "@gb-adviser/ui";
import { useAuthProfile } from "../../../api/auth/profile.ts";

export function HeaderSide() {
  const { data } = useAuthProfile();

  return (
    <UiDropdownTrigger
      before={data?.avatar && <UiAvatar src={data.avatar} name={data.name} />}
      label={data?.name}
      after="angle-down"
    />
  );
}
