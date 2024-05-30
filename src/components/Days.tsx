import { useDays } from "src/hooks/useDays";

export const Days = (props: any) => {
  const { showDefaultDay = true } = props;
  const { locale, daysInMonth, dayClasses, activeClasses, handleClickOnDay } =
    useDays({ showDefaultDay });

  return (
    <div style={{ direction: locale === "fa" ? "rtl" : "ltr" }}>
      <div className="grid grid-cols-7 gap-4 text-sm">
        {daysInMonth.map((item: any, index: number) => (
          <span
            key={index}
            className={`${dayClasses} ${activeClasses(item)}`}
            onClick={() => handleClickOnDay(item)}
          >
            {item?.day}
          </span>
        ))}
      </div>
    </div>
  );
};
