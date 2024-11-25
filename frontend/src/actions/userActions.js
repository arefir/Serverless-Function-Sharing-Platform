import axios from "axios";

const serverPort = process.env.REACT_APP_SERVER_PORT;

const login = async (email, password) => {
  const body = {
    email: email,
    password: password,
  };

  const config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const user = await axios.post(
      `http://localhost:${serverPort}/api/users/auth`,
      body,
      config
    );

    return user.data;
  } catch (error) {
    return error.message;
  }
};

const getUser = async () => {
  const config = {
    withCredentials: true,
  };

  try {
    const user = await axios.get(
      `http://localhost:${serverPort}/api/users/profile`,
      config
    );

    return user.data;
  } catch (error) {
    return error.message;
  }
};

export { login, getUser };
