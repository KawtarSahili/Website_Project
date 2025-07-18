import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const register = async (userData) => {
  try {
    const response = await api.post('/register', {
      username: userData.fullName.replace(/\s+/g, '').toLowerCase(),
      email: userData.email,
      password: userData.password,
      phone: userData.phoneNumber
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const login = async (credentials) => {
  try {
    const isEmail = credentials.phoneOrEmail.includes('@');
    const payload = isEmail
      ? { email: credentials.phoneOrEmail, password: credentials.password }
      : { username: credentials.phoneOrEmail, password: credentials.password };

    const response = await api.post('/login', payload);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};