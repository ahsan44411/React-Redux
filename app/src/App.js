import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeComponents from './components/CakeComponents'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponents />
      </div>
    </Provider>
  );
}

export default App;
