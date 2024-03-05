import { useDateContext } from "../store/DateContext";

export const Months = () => {
  const { currentDate, setCurrentDate } = useDateContext();
  const { showMonthList, setShowMonthList } = useDateContext();
  const months = Array.from({ length: 12 }, (_, index) =>
    currentDate.locale("fa").month(index).format("MMMM")
  );

  const onMonthClick = (month: number) => {
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
