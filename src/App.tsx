export interface IApp {
  text?: string;
}
export const App = ({ text = "Lunar Persian Calendar" }: IApp) => {
  return <div>{text}</div>;
};
