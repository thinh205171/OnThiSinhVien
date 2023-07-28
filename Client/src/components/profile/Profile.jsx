import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './profile.scss';
import { updateUser } from '../../actions/userAction';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const account = useSelector(state => state.authReducer?.account);
  const userName = account.user.username;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      data.username = userName;
      console.log(data)
      const response = await axios.put('http://localhost:3000/update', data);
      const account = response.data;
      dispatch(updateUser(account));
      if (response.data.message === "User updated successfully") {
        alert('Update successful');
        navigate('/');
      }
      if (response.data.message === "User not change") {
        alert('Nothing change');
      }
    } catch (error) {
      console.error('Can not update', error);
    }
  };

  return (
    <div className="profile">
      <div className="container">
        <div className="profile-container">
          <h2 className='profile-title'>Profile</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              className='profile-input'
              label="Full Name"
              defaultValue={account?.user.fullName}
              {...register('fullName')}
              fullWidth
              error={!!errors.fullName}
              helperText={errors.fullName ? 'Full Name is required' : ''}
            />
            <br />
            <TextField
              className='profile-input'
              label="Schools"
              defaultValue={account?.user.schools}
              {...register('schools')}
              fullWidth
              error={!!errors.schools}
              helperText={errors.schools ? 'Schools is required' : ''}
            />
            <br />
            <TextField
              className='profile-input'
              label="Email"
              defaultValue={account?.user.email}
              {...register('email')}
              fullWidth
              error={!!errors.email}
              helperText={errors.email ? 'Email is required' : ''}
            />
            <br />
            {
              account ? (
                <div>
                  <Button variant="contained" type="submit">
                    Save
                  </Button>
                </div>
              ) : ("")
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
