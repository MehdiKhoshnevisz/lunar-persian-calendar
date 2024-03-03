import jalaliday from "jalaliday";
import dayjs, { Dayjs } from "dayjs";

type DateType = Dayjs;

export const useDate = () => {
  dayjs.extend(jalaliday);
  return (date?: DateType) => dayjs(date).calendar("jalali");
};
