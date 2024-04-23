export const WEEKDAY_NAMES = [
  {
    key: 0,
    name: "ش",
  },
  {
    key: 1,
    name: "ی",
  },
  {
    key: 2,
    name: "د",
  },
  {
    key: 3,
    name: "س",
  },
  {
    key: 4,
    name: "چ",
  },
  {
    key: 5,
    name: "پ",
  },
  {
    key: 6,
    name: "ج",
  },
];

export const DaysHeader = () => {
  return (
    <div
      className="grid grid-cols-7 gap-4 text-sm text-gray-400 mb-2"
      style={{ direction: "rtl" }}
    >
      {WEEKDAY_NAMES.map((day, index) => (
        <span key={index} className="block text-center w-8 h-8">
          {day.name}
        </span>
      ))}
    </div>
  );
};
