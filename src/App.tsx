import Routes from './routes/Routes';
import GlobalStyle from './style/Global';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={ store }>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
