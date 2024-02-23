import { IApp } from "./index";

export const App: React.FC<IApp> = ({
  text = "Lunar Persian Calendar",
}: IApp) => {
  return <div>{text}</div>;
};
