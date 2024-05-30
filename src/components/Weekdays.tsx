import { useDateContext } from "src/store/DateContext";
import { useWeekdays } from "../hooks/useWeekdays";

export const Weekdays = () => {
  const { locale } = useDateContext();
  const { getWeekdays } = useWeekdays();
  const weekdays = getWeekdays();

  return (
    <div
      className="grid grid-cols-7 gap-4 text-sm text-gray-400 mb-2"
      style={{ direction: locale === "fa" ? "rtl" : "ltr" }}
    >
      {weekdays.map((day, index) => (
        <span key={index} className="block text-center min-w-8 min-h-8">
          {day.name}
        </span>
      ))}
    </div>
  );
};
