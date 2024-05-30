import jalaali from "jalaali-js";
import jalaliday from "jalaliday";
import dayjs, { Dayjs } from "dayjs";
import weekday from "dayjs/plugin/weekday";
import objectSupport from "dayjs/plugin/objectSupport";

type DateType = Dayjs | Object;

interface DateObject {
  day: number;
  month: number;
  year: number;
}

export const useDate = () => {
  dayjs.extend(weekday);
  dayjs.extend(jalaliday);
  dayjs.extend(objectSupport);

  const baseDate = dayjs;

  const toGregorian = ({ year, month, day }: DateObject) => {
    return jalaali.toGregorian(year, month, day);
  };

  const toJalaali = ({ year, month, day }: DateObject) => {
    return jalaali.toJalaali(year, month, day);
  };

  return { baseDate, toGregorian, toJalaali };
};
