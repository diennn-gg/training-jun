import { axiosPublic } from "../../components/js/AxiosPublic";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { showToastError } from "../../components/js/Toast";
import { history } from '../../components/js/History';
import Cookies from 'js-cookie';

// Action Register
export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, name, password }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublic.post(`/auth/register`,{ email, name, password });
      history.navigate('/login');
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        showToastError(error.response.data.message, 'register-id');
        return rejectWithValue(error.response.data.message)
      } else {
        showToastError(error.message, 'register-id');
        return rejectWithValue(error.message)
      }
    }
  }
)

// Action Login
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosPublic.post(`/auth/login`,{ email, password });
      Cookies.set('token', data.tokens.access.token);
      Cookies.set('refreshToken', data.tokens.refresh.token);
      history.navigate('/');
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(showToastError(error.response.data.message,'login-id'));
        return rejectWithValue(error.response.data.message)
      } else {
        dispatch(showToastError(error.message,'login-id'));
        return rejectWithValue(error.message)
      }
    }
  }
)
