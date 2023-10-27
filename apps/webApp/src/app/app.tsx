import { reducers } from '@m-repo/reducers';

export function App() {
  return (
    <div>
      <h1>
        <span>Hello there</span>
      </h1>
      <span>{'From shared module -> ' + reducers()}</span>
    </div>
  );
}

export default App;
