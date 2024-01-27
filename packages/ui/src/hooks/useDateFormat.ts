import { format } from "date-fns";
import { useUiContext } from "../providers";

export const useDateFormat = () => {
  const { dateFnsLocale } = useUiContext();

  return (date: Date | string | number, dateFormat: string = "PPpp") => {
    return format(date, dateFormat, {
      locale: dateFnsLocale,
    });
  };
};
