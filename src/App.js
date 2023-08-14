import { Provider } from 'react-redux';
import { store } from './store';
import { UserForm } from './components/user-form';
import { UserList } from './components/user-list';

const App = () => {
  return (
    <Provider store={store}>
      <UserForm />
      <UserList />
    </Provider>
  );
};

export { App };
