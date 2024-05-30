import { useDateContext } from "../store/DateContext";

type formatType = "d" | "dd" | "ddd" | "dddd";

export const useWeekdays = () => {
  const { currentDate } = useDateContext();

  const getWeekdays = (format: formatType = "dd") =>
    Array.from({ length: 7 }, (_, index) => {
      return {
        key: index,
        name: currentDate.weekday(index).format(format),
      };
    });

  return { getWeekdays };
};
