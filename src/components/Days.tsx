import { useDays } from "src/hooks/useDays";

export const Days = (props: any) => {
  const { showDefaultDay = true } = props;
  const { days, locale, dayClasses, activeClasses, clickOnDay } = useDays({
    showDefaultDay,
  });

  return (
    <div style={{ direction: locale === "fa" ? "rtl" : "ltr" }}>
      <div className="grid grid-cols-7 gap-4 text-sm">
        {days.map((item: any, index: number) => (
          <span
            key={index}
            className={`${dayClasses} ${activeClasses(item)}`}
            onClick={() => clickOnDay(item)}
          >
            {item?.day}
          </span>
        ))}
      </div>
    </div>
  );
};
