import { CalendarProps } from "./index.d";
import Calendar from "./components/Calendar";
import { DateProvider } from "./store/DateContext";

import "./global.css";

const App = (props?: CalendarProps) => {
  return (
    <DateProvider>
      <Calendar {...props} />
    </DateProvider>
  );
};

export default App;
