import { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { addUser } from '../../store/user/actions';
import { TextField } from '../common';

const UserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const isValidForm =
    Object.keys(errors).length === 0 && formData.email && formData.firstName && formData.lastName && formData.message;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateField = (field, value) => {
    let fieldErrors = { ...errors };

    switch (field) {
      case 'firstName':
        if (!value) fieldErrors.firstName = 'First name is required';
        else delete fieldErrors.firstName;
        break;
      case 'lastName':
        if (!value) fieldErrors.lastName = 'Last name is required';
        else delete fieldErrors.lastName;
        break;
      case 'email':
        if (!validator.isEmail(value)) fieldErrors.email = 'Invalid email address';
        else delete fieldErrors.email;
        break;
      case 'message':
        if (!value) fieldErrors.message = 'Message is required';
        else delete fieldErrors.message;
        break;
      default:
        break;
    }

    setErrors(fieldErrors);
  };

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const field in formData) {
      validateField(field, formData[field]);
    }

    if (Object.keys(errors).length === 0) {
      dispatch(addUser(formData));
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={formData.firstName}
        name='firstName'
        label='First Name'
        placeholder='Enter first name'
        error={errors?.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        value={formData.lastName}
        name='lastName'
        label='Last Name'
        placeholder='Enter last name'
        error={errors?.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        value={formData.email}
        name='email'
        label='Email'
        placeholder='Enter email'
        error={errors?.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        value={formData.message}
        name='message'
        label='Message'
        placeholder='Enter message'
        error={errors?.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type='submit' disabled={!isValidForm}>
        Submit
      </button>
    </form>
  );
};

export { UserForm };
