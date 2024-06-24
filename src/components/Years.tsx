import { useYears } from "../hooks/useYears";
import { useDateContext } from "../store/DateContext";

export const Years = () => {
  const { years, setYear } = useYears();
  const { setShowYearList } = useDateContext();

  const onYearClick = (year: number) => {
    setYear(year);
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
          className="cursor-pointer"
          onClick={() => onYearClick(item.key)}
        >
          {item.year}
        </span>
      ))}
    </div>
  );
};
