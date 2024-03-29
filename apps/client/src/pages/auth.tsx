import { useAtom } from "jotai/index";
import { addSeconds } from "date-fns";
import { UiButton } from "@gb-adviser/ui";
import { authorizedUntilAtom } from "../state/atoms/authorizedUntilAtom.ts";

export default function AuthPage() {
  const [, setAuthorizedUntil] = useAtom(authorizedUntilAtom);

  const signIn = () => {
    setAuthorizedUntil(addSeconds(new Date(), 900));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UiButton onClick={signIn}>Sign in</UiButton>
    </div>
  );
}
