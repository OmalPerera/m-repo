import { Provider } from 'react-redux';
import CounterComponent from './counterComponent';
import { store } from '@m-repo/store';

export function App() {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
}

export default App;
