import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { UserForm } from '../';

describe('UserForm Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );
  });

  it('shows error when invalid email is entered', async () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Enter email'), {
      target: { value: 'invalidemail' },
    });
    fireEvent.blur(screen.getByPlaceholderText('Enter email'));

    await waitFor(() => {
      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
    });
  });

  it('does not show error when valid email is entered', async () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Enter email'), {
      target: { value: 'test@email.com' },
    });
    fireEvent.blur(screen.getByPlaceholderText('Enter email'));

    await waitFor(() => {
      expect(screen.queryByText('Invalid email address')).not.toBeInTheDocument();
    });
  });

  it('shows error when no first name is entered', async () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Enter first name'), {
      target: { value: '' },
    });
    fireEvent.blur(screen.getByPlaceholderText('Enter first name'));

    await waitFor(() => {
      expect(screen.getByText('First name is required')).toBeInTheDocument();
    });
  });

  it('does not show error when valid first name is entered', async () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Enter first name'), {
      target: { value: 'test' },
    });
    fireEvent.blur(screen.getByPlaceholderText('Enter first name'));

    await waitFor(() => {
      expect(screen.queryByText('First name is required')).not.toBeInTheDocument();
    });
  });
});
