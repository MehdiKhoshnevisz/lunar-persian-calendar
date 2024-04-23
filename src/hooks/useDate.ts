import jalaliday from "jalaliday";
import dayjs, { Dayjs } from "dayjs";
import weekday from "dayjs/plugin/weekday";

type DateType = Dayjs;

export const useDate = () => {
  dayjs.extend(weekday);
  dayjs.extend(jalaliday);
  return (date?: DateType) => dayjs(date).calendar("jalali");
};
