import SelectorsWrapper from './components/selectors-wrapper/selectors-wrapper';

function App() {
  return (
    <div className="App">
      <h1>приложение для поиска пользователей</h1>
      <p>По какому параметру искать: </p>
      <SelectorsWrapper />
    </div>
  );
}

export default App;
