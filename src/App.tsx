function App(props: any) {
  const { title = "Lunar Persian Calendar" } = props;
  return <h1 className="text-3xl text-dark font-serif p-4">{title}</h1>;
}

export default App;
