import { useMonth } from "../hooks/useMonth";
import { useDateContext } from "../store/DateContext";

export const Months = () => {
  const { months } = useMonth();
  const {
    currentDate,
    calendarType,
    setCurrentDate,
    setShowMonthList,
    setCurrentMonthFromHeader,
  } = useDateContext();

  const onMonthClick = (month: number) => {
    setCurrentMonthFromHeader(month);
    setCurrentDate(currentDate.month(month));
    setShowMonthList(false);
  };

  return (
    <div
      className="grid grid-cols-3 gap-x-14 gap-y-11 text-center py-4"
      style={{ direction: "rtl" }}
    >
      {months.map((item, index) => (
        <span
          key={index}
          className={`cursor-pointer`}
          onClick={() => onMonthClick(index)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
