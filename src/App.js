import { Provider } from 'react-redux';
import { store } from './store';
import { UserForm } from './components/user-form';

const App = () => {
  return (
    <Provider store={store}>
      <UserForm />
    </Provider>
  );
};

export { App };
