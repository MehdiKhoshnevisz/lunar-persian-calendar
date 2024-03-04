export const Header = (props: any) => {
  const { currentDate, onNext = () => {}, onPrev = () => {} } = props;

  const monthName = () => {
    return currentDate.locale("fa").format("MMMM");
  };

  const currentYear = () => {
    return currentDate.locale("fa").year();
  };

  const clickOnPrevMonth = () => {
    if (currentDate.month() === 0) {
      // Fix: need to fix first time prev button
      const prevYear = currentDate.month(11).subtract(1, "year");
      onPrev(prevYear);
    } else {
      const prevMonth = currentDate.subtract(1, "month");
      onPrev(prevMonth);
    }
  };

  const clickOnNextMonth = () => {
    if (currentDate.month() === 11) {
      const nextYear = currentDate.month(0).add(1, "year");
      onNext(nextYear);
    } else {
      const nextMonth = currentDate.add(1, "month");
      onNext(nextMonth);
    }
  };

  return (
    <header className="flex justify-between items-center mb-6">
      <img
        src="/arrow-left.svg"
        alt=""
        className="cursor-pointer  transition-all active:scale-90"
        onClick={clickOnPrevMonth}
      />
      <div>
        <span>{monthName()}&nbsp;</span>
        <span>{currentYear()}</span>
      </div>
      <img
        src="/arrow-right.svg"
        alt=""
        className="cursor-pointer transition-all active:scale-90"
        onClick={clickOnNextMonth}
      />
    </header>
  );
};
