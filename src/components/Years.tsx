import { useDateContext } from "../store/DateContext";

export const Years = () => {
  const { currentDate, setCurrentDate } = useDateContext();
  const { showYearList, setShowYearList } = useDateContext();
  const { currentYearFormHeader, setCurrentYearFromHeader } = useDateContext();
  const years = Array.from({ length: 200 }, (_, index) =>
    currentDate
      .locale("fa")
      .year(1320 + index)
      .format("YYYY")
  );

  const onYearClick = (year: number) => {
    setCurrentYearFromHeader(1320 + year);
    setShowYearList(false);
  };

  return (
    <div
      className="grid grid-cols-3 gap-x-14 gap-y-11 text-center py-4 overflow-y-auto"
      style={{ direction: "rtl", height: "320px", overflow: "auto" }}
    >
      {years.map((item, index) => (
        <span
          key={index}
          className={`cursor-pointer`}
          onClick={() => onYearClick(index)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
