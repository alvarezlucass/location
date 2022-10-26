import AppNavigator from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { init } from './src/db/DbIndex';
import { store } from './src/store/store';

init()
  .then(()=> {
    console.log('Inicializando Base de Datos');
    })
    .catch((err) => {
      console.log('Inicializando Base caida', err);
    });

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}